import axios from 'axios';

export const state = () => ({
    admins: {},
    token: localStorage.getItem('token') || "",
    isloading: false,
    categorys: [],
    posts: [],
    popularPosts: [],
    latestPosts: [],
    getCategorys: [],
    allPosts: [],
    comments: [],
    adminComments: [],
    subscribes: [],
    contacts: [],
    settings: [],
})

export const mutations = {
    setAdmins(state, admins) {
        state.admins = admins;
    },
    setIsLoading(state, isloading) {
        state.isloading = isloading;
    },
    setToken(state, token) {
        state.token = token;
    },
    setCategorys(state, categorys) {
        state.categorys = categorys;
    },
    setPosts(state, posts) {
        state.posts = posts;
    },
    setPopularPost(state, popularPosts) {
        state.popularPosts = popularPosts;
    },
    setLatestPost(state, latestPosts) {
        state.latestPosts = latestPosts;
    },
    setgetCategory(state, getCategorys) {
        state.getCategorys = getCategorys;
    },
    setAllPosts(state, allPosts) {
        state.allPosts = allPosts;
    },
    setComments(state, comments) {
        state.comments = comments;
    },
    setAdminComments(state, adminComments) {
        state.adminComments = adminComments;

    },
    setSubscribe(state, subscribes) {
        state.subscribes = subscribes;

    },
    setContacts(state, contacts) {
        state.contacts = contacts;
    },
    setSettings(state, settings) {
        state.settings = settings;
    },

}

export const actions = {
    // Admins side
    // admin login
    async adminLogins({ commit }, data) {
        commit('setIsLoading', true);
        const admins = await axios.post('http://localhost:8000/api/login', data);
        if (admins.data.success) {
            this.$toast.show(admins.data.message, {
                type: "success",
            });
            commit('setToken', admins.data.token);
            localStorage.setItem('token', admins.data.token);
            this.$router.push('/admin/dashboard')
        } else {
            this.$toast.show(admins.data.message, {
                type: "error",
            });
        }
    },
    // get admins name and email
    async getAdmins({ commit }) {
        const config = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        }
        const data = await axios.get('http://localhost:8000/api/admin/admins', config);
        commit('setAdmins', data.data[0])
    },
    // admin logout
    async adminLogout({ commit }) {
        commit('setAdmins', '')
        commit('setToken', '')
        localStorage.removeItem('token')
        this.$router.push('/admin')
        this.$toast.show('logout Successfully', {
            type: "success",
        });
    },
    // create category
    async createCategory({ commit }, data) {
        commit("setIsLoading", true)
        const config = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        }
        const res = await axios.post('http://localhost:8000/api/admin/categorys', data, config);
        if (res.data.success) {
            this.$toast.show(res.data.message, {
                type: "success",
            });
            data.category_name = ''
            commit("setIsLoading", false)
            this.$router.push('/admin/category')

        } else {
            this.$toast.show(res.data.message, {
                type: "error",
            });
            commit("setIsLoading", false)
        }
    },
    // get category
    async getCategory({ commit }) {
        commit('setIsLoading', true)
        const config = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        }
        const res = await axios.get(`http://localhost:8000/api/admin/categorys`, config);
        if (res.data.success) {
            commit('setIsLoading', false)
            commit('setCategorys', res.data.categorys)
        }
    },
    // delete category
    async deleteCategory(_, id) {
        const config = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        }
        const res = await axios.delete(`http://localhost:8000/api/admin/categorys/${id}`, config);
        if (res.data.success) {
            this.$toast.show(res.data.message, {
                type: 'success'
            })
        } else {
            this.$toast.show(res.data.message, {
                type: 'error'
            })
        }
    },

    // update Category
    async updateCategory({ commit }, data) {
        commit('setIsLoading', true)
        const config = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        }
        const res = await axios.post(`http://localhost:8000/api/admin/categorys/${data.id}`, data, config);
        if (res.data.success) {
            commit('setIsLoading', false)
            this.$toast.show(res.data.message, {
                type: 'success'
            });
            this.$router.push("/admin/category")
        } else {
            commit('setIsLoading', false)
            this.$toast.show(res.data.message, {
                type: 'error'
            })
        }
    },

    // create post
    async createPost({ commit }, data) {
        commit('setIsLoading', true)
        const config = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        }
        const res = await axios.post("http://localhost:8000/api/admin/posts", data, config)
        if (res.data.success) {
            this.$toast.show(res.data.message, {
                type: 'success'
            });
            commit('setIsLoading', false)
            this.$router.push('/admin/post')
        } else {
            commit('setIsLoading', false)
            this.$toast.show(res.data.message, {
                type: 'error'
            });
        }
    },

    // get Posts
    async getPosts({ commit }) {
        commit("setIsLoading", true)
        const config = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        };
        const res = await axios.get("http://localhost:8000/api/admin/posts", config);
        if (res.data.success) {
            console.log(res);
            commit('setIsLoading', false)
            commit('setPosts', res.data.posts)
        }
    },
    // delete posts
    async deletePost(_, id) {
        const config = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        };
        const res = await axios.delete("http://localhost:8000/api/admin/posts/" + id, config);
        if (res.data.success) {
            this.$toast.show(res.data.message, {
                type: 'success'
            });
        } else {
            this.$toast.show(res.data.message, {
                type: 'error'
            });
        }
    },
    // update posts
    async updatePost({ commit }, data) {
        commit('setIsLoading', true)
        const config = {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem('token')
            }
        };
        const res = await axios.post('http://localhost:8000/api/admin/update', data, config);
        console.log(res);
        if (res.data.success) {
            commit('setIsLoading', false)
            this.$toast.show(res.data.message, {
                type: 'success'
            })
            this.$router.push("/admin/post")
        } else {
            commit('setIsLoading', false)
            this.$toast.show(res.data.message, {
                type: 'error'
            })
        }

    },
    // get comments
    async getAdminsComments({ commit }) {
        commit('setIsLoading', true);
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        const res = await axios.get("http://localhost:8000/api/admin/comments", config);
        if (res.data.success) {
            commit('setIsLoading', false);
            commit('setAdminComments', res.data.comments);
        }
    },
    // delete Comments
    async deleteComment(_, id) {
        const config = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        };
        const res = await axios.delete("http://localhost:8000/api/admin/comments/" + id, config);
        if (res.data.success) {
            this.$toast.show(res.data.message, {
                type: 'success'
            });
        } else {
            this.$toast.show(res.data.message, {
                type: 'error'
            });
        }
    },
    async getSubscribes({ commit }) {
        commit('setIsLoading', true);
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        const res = await axios.get("http://localhost:8000/api/admin/subscribe", config);
        if (res.data.success) {
            commit('setIsLoading', false);
            commit('setSubscribe', res.data.subscribes);
        }
    },
    async deleteSub(_, id) {
        const config = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        };
        const res = await axios.delete("http://localhost:8000/api/admin/subscribe/" + id, config);
        if (res.data.success) {
            this.$toast.show(res.data.message, {
                type: 'success'
            });
        } else {
            this.$toast.show(res.data.message, {
                type: 'error'
            });
        }
    },
    async getContacts({ commit }) {
        commit('setIsLoading', true);
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        const res = await axios.get("http://localhost:8000/api/admin/contacts", config);
        if (res.data.success) {
            commit('setIsLoading', false);
            commit('setContacts', res.data.contects);
        }
    },
    async deleteContact(_, id) {
        const config = {
            'headers': {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        };
        const res = await axios.delete("http://localhost:8000/api/admin/contacts/" + id, config);
        if (res.data.success) {
            this.$toast.show(res.data.message, {
                type: 'success'
            });
        } else {
            this.$toast.show(res.data.message, {
                type: 'error'
            });
        }
    },
    // frontend side
    async getPopularPost({ commit }) {
        commit("setIsLoading", true);
        const res = await axios.get("http://localhost:8000/api/front/popular-posts");
        commit("setPopularPost", res.data.posts)
        commit("setIsLoading", false);

    },
    async getLatestPost({ commit }) {
        commit("setIsLoading", true);
        const res = await axios.get("http://localhost:8000/api/front/latest-posts");
        commit("setLatestPost", res.data.posts)
        commit("setIsLoading", false);

    },
    async getCategorys({ commit }) {
        const res = await axios.get("http://localhost:8000/api/front/categorys");
        commit("setgetCategory", res.data.categorys)

    },
    async getAllPost({ commit }) {
        commit("setIsLoading", true)
        const res = await axios.get("http://localhost:8000/api/front/all-posts");
        commit("setIsLoading", false)
        commit("setAllPosts", res.data.posts)

    },
    // submit comments
    async addComment({ commit }, data) {
        commit('setIsLoading', true);
        const res = await axios.post(`http://localhost:8000/api/front/comments/${data.id}`, data);
        if (res.data.success) {
            commit('setIsLoading', false);
            this.$toast.show(res.data.message, {
                type: 'success'
            });
            this.$router.push(`/post-detail/${data.id}`)

        } else {
            commit('setIsLoading', false);
            this.$toast.show(res.data.message, {
                type: 'error'
            });
        }

    },
    // get Comments
    async getComments({ commit }, id) {
        console.log(id);
        const res = await axios.get("http://localhost:8000/api/front/comments/" + id);
        if (res.data.success) {
            commit("setComments", res.data.comments)
        }

    },
    // submit contacts
    async addContact({ commit }, data) {
        commit('setIsLoading', true);
        const res = await axios.post('http://localhost:8000/api/front/contact', data);
        if (res.data.success) {
            this.$toast.show(res.data.message, {
                type: 'success'
            });
            commit('setIsLoading', false);

        } else {
            this.$toast.show(res.data.message, {
                type: 'error'
            });
            commit('setIsLoading', false);

        }
    },
    // add subscribe
    async addSubscribe(_, data) {
        const res = await axios.post("http://localhost:8000/api/front/subscribe", data);
        if (res.data.success) {
            this.$toast.show(res.data.message, {
                type: 'success'
            })
        } else {
            this.$toast.show(res.data.message, {
                type: 'error'
            })
        }
    },
    // get all settings
    async getSettings({ commit }) {
        const res = await axios.get("http://localhost:8000/api/front/setting");
        if (res.data.success) {
            commit('setSettings', res.data.settings)
        }

    }
}