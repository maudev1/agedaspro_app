<template>
    <div class="menu-box">
        <button class="btn btn-light new-schedule" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <a href="#"><i class="fas fa-plus-circle"></i></a>
        </button>

        <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
            id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">{{ title }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr>
            <div class="offcanvas-body">


                <div class="container">

                    <div class="mb-4">

                        <p>Dados do cliente</p>

                    </div>

                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="floatingInputValue" v-model="form.customer_name" placeholder="campo obrigatorio">
                        <label for="floatingInputValue">Nome</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="floatingInputValue" v-model="form.customer_phone" placeholder="campo obrigatorio">
                        <label for="floatingInputValue">Telefone ou Celular</label>
                    </div>
                    <div class="form-floating mb-2">
                        <textarea class="form-control"  v-model="form.customer_observation"></textarea>
                        <label for="floatingInputValue">Observação</label>
                    </div>

                    <div class="mt-4 mb-4">

                        <p>Data e horário</p>

                    </div>

                    <div class="form-group mb-2">
                        <Datepicker v-model="form.schedule_date" :enable-time-picker="false" utc />
                    </div>
                    <div class="form-group mb-2">
                        <select id="form-schedule-time" v-model="form.schedule_time"  class="form-control">
                            <option value="9:00">9:00</option>
                            <option value="9:00">12:00</option>
                            <option value="9:00">5:00</option>
                        </select>    
                    </div>

                    <div class="form-group mt-4 mb-4 text-center">
                        <button type="submit" class="btn btn-primary">Agendar</button>

                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
export default {
    components:{
        Datepicker
    },
    data() {
        return {
            title: "Novo Agendamento",
            form:{
                customer_name:'',
                customer_phone:'',
                customer_observation:'',
                schedule_date:'',
                schedule_time:''

            },
            schedules:[
                {
                    id:'01',
                    date:'2023-06-4',
                    time:'13:00'

                },
                {
                    id:'02',
                    date:'2023-06-4',
                    time:'14:00'

                },
                {
                    id:'03',
                    date:'2023-06-4',
                    time:'15:00'

                }

            ]
        }
    },
    mounted() {

    },
    methods: {
        newSchedule(){

            

            

        }

    }
}


</script>
