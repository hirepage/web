import qs from 'query-string'
import Moment from 'moment-timezone'
import { extendMoment } from 'moment-range'
import { chain, isEqual, flatten, find, get, sample, first, difference } from 'lodash'

const moment = extendMoment(Moment)

export default app => ({
  myUser () {
    return app.$axios.$get('/user').then(user => {
      if (user) {
        app.store.commit('SET_USER', user)
      } else {
        app.$api.auth.logout()
        app.router.push('/login')
      }
      return user
    }).catch(console.error)
  },
  update (data) {
    return app.$axios.$put('/user', data).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  getUser (username) {
    return app.$axios.$get(`/user/${username}`).then(user => {
      app.store.commit('SET_BLOCKS', user.blocks)
      return user
    })
  },
  checkUsername (username) {
    return app.$axios.$get(`/user/username/${username}`)
  },
  register (data) {
    return app.$axios.$post('/user/register', data).then(auth => {
      app.$api.auth.setAuth(auth)
    })
  },
  login (data) {
    return app.$axios.$post('/user/login', data).then(auth => {
      app.$api.auth.setAuth(auth)
    })
  },
  confirmEmail (data) {
    return app.$axios.$post('/user/email/confirm', data).then(({ user, message }) => {
      app.store.commit('SET_USER', user)
      return message
    })
  },
  forgotPassword (data) {
    return app.$axios.$post('/user/forgot', data)
  },
  resetPassword (data) {
    return app.$axios.$post('/user/password', data).then(auth => {
      app.$api.auth.setAuth(auth)
    })
  },
  addLink (data) {
    return app.$axios.$post('/user/link', data).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  editLink (id, data) {
    return app.$axios.$put(`/user/link/${id}`, data).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  removeLink (id) {
    return app.$axios.$delete(`/user/link/${id}`).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  orderLink (id, position) {
    return app.$axios.$put(`/user/link/${id}/order`, { index: position }).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  addField (data) {
    return app.$axios.$post('/user/field', data).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  editField (id, data) {
    return app.$axios.$put(`/user/field/${id}`, data).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  removeField (id) {
    return app.$axios.$delete(`/user/field/${id}`).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  orderField (id, position) {
    return app.$axios.$put(`/user/field/${id}/order`, { index: position }).then(user => {
      app.store.commit('SET_USER', user)
    })
  },
  getCalendar2 (username, timezone, month, duration) {
    const query = qs.stringify({ timezone, month, duration })
    return app.$axios.$get(`/user/${username}/calendar?${query}`)
  },
  addAvailablity (data) {
    return app.$axios.$post('/user/availability', data).then(user => {
      app.store.commit('SET_USER', user)
    })
  },

  async getCalendar (blocks, timezone, month, duration=30) {
    const start = month
      ? moment.tz(`${month}-01`, timezone).startOf('month')
      : moment.tz(timezone).startOf('month')
    const previousMonth = start.clone().subtract(1, 'month').endOf('month')
    const nextMonth = start.clone().add(1, 'month')

    return {
      timezone: timezone,
      month: start.format('YYYY-MM'),
      previousMonth: previousMonth.isAfter(moment()) ? previousMonth.format('YYYY-MM') : undefined,
      nextMonth: moment().add(6, 'month').endOf('month').isAfter(nextMonth) ? nextMonth.format('YYYY-MM') : undefined,
      firstWeekday: start.weekday(), // This is used for spacing the first day button on the frontend
      dates: this.getCalendarDates(blocks, timezone, start, duration)
    }
  },

  getCalendarDates (blocks, timezone, start, duration) {
    // const timezone = 'America/Santiago'

    const now = moment()
    const meetings = [] // await Meeting.find({ attendees: { $in: user._id } })

    const meetingsTimes = chain(meetings).map(meeting => {
      const start = moment(meeting.start)
      // Doesn't allow booking on ending time to give gap between meetings
      return Array.from(moment.range(start.clone().subtract(duration, 'minutes'), start.clone().add(meeting.duration, 'minutes'))
        .by('minute', { step: 30 }))
        .map(m => {
          return {
            unix: m.unix(),
            users: meeting.attendees.map(a => a.id)
          }
        })
    }).flatten().groupBy('unix').map(times => {
      return {
        unix: first(times).unix,
        users: flatten(times.map(t => t.users))
      }
    }).value()

    const monthRange = moment.range(
      start.clone().startOf('month'),
      start.clone().endOf('month')
    )
    // Each day of the month with the time slots and the users available at that time
    return Array.from(monthRange.by('day')).map(day => {
      const dayBlocks = blocks.filter(b => b.days.includes(day.weekday()))
      const times = chain(dayBlocks).map(block => {
        const date = day.format('YYYY-MM-DD')
        const start = moment.tz(`${date} ${block.start}`, block.timezone).tz(timezone)
        const end = moment.tz(`${date} ${block.end}`, block.timezone).tz(timezone).subtract(duration, 'minutes')
        // Time slots from a users block
        return Array.from(moment.range(start, end).by('minute', { step: 30 })).map(time => {
          return {
            unix: time.unix(),
            display: time.format('h:mm a'),
            user: String(block.user)
          }
        })
        // Flatten to turn list of block list of times slots into list of time slots
        // Then groupBy and "merge" to get the list of users for each timeslot
      }).flatten().groupBy('unix').map(times => {
        const busyUsers = get(find(meetingsTimes, { unix: first(times).unix }), 'users') || []
        return {
          unix: first(times).unix,
          display: first(times).display,
          users: difference(times.map(t => t.user), busyUsers)
        }
      }).filter(t => {
        // Filter out slots with no available users and slots that are too soon or in past
        // default to 16 hours ahead of time
        return t.users.length && now.unix() + 3600 * 16 < t.unix
      }).sortBy('unix').value()
      return {
        today: day.isSame(moment(), 'day') ? true : undefined,
        day: day.format('YYYY-MM-DD'),
        dayOfMonth: day.format('D'),
        display: day.format('ddd, MMM D'),
        times: times
      }
    })
  }
})
