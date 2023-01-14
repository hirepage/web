export default function ({ redirect, app }) {
  if (!app.$cookies.get('auth')) {
    return redirect('/login')
  }
}
