// COMPONENT DEFS

const FeatureCard = {
    props: ['title', 'description', 'image'],
    template: `<div class="card">
                <h2>{{title}}</h2>
                <img v-bind:src="image">
                <p>{{description}}</p>
                </div>`
}

//ROOT INSTANCE

const app = new Vue({
    components: {
        'feature-card': FeatureCard
    },
    el: "#app",
    data: {
        hello: "Hello World"
    }
})

