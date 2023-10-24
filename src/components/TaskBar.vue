<template>
    <div class="mt-4">
        <div class="container mb-2">
            <ul class="nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Hoje</a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="tomorrow">Amanhã</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Depois</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">...</a>
                </li>
            </ul>
            <hr>

        </div>
        <div class="container mb-2">
            <div v-for="schedule in schedules" :key="schedule.id" class="card mb-2">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{ schedule.description }}</li>
                </ul>

                <div class="card-body">
                    <a href="#" class="card-link"><i class="fas fa-clock"></i> {{ schedule.created_at }}</a>
                    <!-- <a href="#" class="card-link">13:10</a> -->
                </div>
            </div>


        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            day:1,
            schedules: [],
        }
    },
    methods: {
        getSchedules() {

            let data = {
                token:this.$store.state.user.accessToken
            };

            console.log(data)

            // httpService.makeRequest('http://localhost:8000/api/schedule', 'GET', data).then((response) => {
            //     this.schedules = response
            // });
        },
        getDate(){

            let date = new Date; 

            console.log(date)

        }
    },
    mounted() {
        this.getSchedules();
    }



}



</script>