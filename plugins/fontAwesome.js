import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMessageBot, faVideoCircle, faShieldCheck, faWavePulse, faCircleHeart, faArrowUpRightFromSquare  }  from '@fortawesome/pro-solid-svg-icons'
import { faBoltLightning, faCommentDollar, faFileInvoiceDollar, faInboxIn, faPhone, faLink }  from '@fortawesome/pro-regular-svg-icons'
import { faArrowUpFromSquare }  from '@fortawesome/pro-light-svg-icons'


import { faCopy, faEdit, faSmile, faHeart, faAddressCard, faComments } from '@fortawesome/free-regular-svg-icons'


import {
  faGithub,
  faLinkedin,
  faTwitter,
  faStripeS,
  faApple,
  faSlack,
  faYoutube,
  faFacebook,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import {
  faLock,
  faArrowRight,
  faEuroSign,
  faCommentsDollar,
  faCreditCard,
  faStore,
  faCode,
  faMinus,
  faPlus,
  faUsers,
  faCheck,
  faDollarSign,
  faUser,
  faChevronDown,
  faChevronUp,
  faEnvelope,
  faRedo,
  faChevronRight,
  faComment,
  faStar,
  faTimes,
  faPencilAlt,
  faUndo,
  faVideo,
  faRobot,
  faCamera
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faInstagram,
  faFacebook,
  faCamera,
  faRobot,
  faVideo,
  faMinus,
  faEnvelope,
  faDollarSign,
  faPlus,
  faLinkedin,
  faTwitter,
  faGithub,
  faUsers,
  faCheck,
  faLink,
  faChevronDown,
  faChevronUp,
  faUser,
  faStripeS,
  faCode,
  faApple,
  faStore,
  faCreditCard,
  faSlack,
  faCommentsDollar,
  faEuroSign,
  faAddressCard,
  faRedo,
  faChevronRight,
  faComment,
  faStar,
  faCopy,
  faArrowRight,
  faTimes,
  faPencilAlt,
  faLock,
  faUndo,
  faYoutube,
  faMessageBot,
  faVideoCircle,
  faShieldCheck,
  faWavePulse,
  faSmile,
  faBoltLightning,
  faHeart,
  faCircleHeart,
  faCommentDollar,
  faAddressCard,
  faFileInvoiceDollar,
  faInboxIn,
  faComments,
  faArrowUpFromSquare,
  faArrowUpRightFromSquare,
  faPhone,
  faLink
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
