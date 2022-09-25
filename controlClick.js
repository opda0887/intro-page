const app = Vue.createApp({
    
    data() {
        return {
            sel: true,
            edu: false,
            exp: false,
            pro: false,

            eduDuring: [
                {school: '成功大學 - National Cheng Kung University', graduateDay: 'Currently studying： 資訊工程學系 - CSIE'},
                {school: '瑞祥高中 - Rueisiang Senior High School', graduateDay: '2022/06/01 graduated'}
            ]
        }
    },
    
    methods: {
        
        selControl() {
            this.sel = true,
            this.edu = false,
            this.exp = false,
            this.pro = false
        },

        eduControl() {
            this.sel = false,
            this.edu = true,
            this.exp = false,
            this.pro = false
        },

        expControl() {
            this.sel = false,
            this.edu = false,
            this.exp = true,
            this.pro = false
        },

        proControl() {
            this.sel = false,
            this.edu = false,
            this.exp = false,
            this.pro = true
        },
    }
})

app.mount('#PBox')