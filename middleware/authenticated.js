export default function ({ redirect, route, app }) {
  if (!app.$cookies.get('auth')) {
    app.$cookies.set('next', route.fullPath, {
      path: '/'
    })
    return redirect('/login')
  }
}
