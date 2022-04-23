export default function ({ store, redirect }) {
    if (store.state.token) {
        return redirect('/admin/dashboard');
    }
}