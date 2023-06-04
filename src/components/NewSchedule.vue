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

                    <div class="form-floating mb-2">
                        <input type="date" min="2023-06-4" list="date-list" class="form-control" id="floatingInputValue" v-model="form.schedule_date" placeholder="campo obrigatorio">
                        <label for="floatingInputValue">Data</label>
                    </div>
                    <datalist id="date-list">
                            <option value="">Amanhã</option>
                            <option value="">Depois</option>

                    </datalist>

                    <div class="form-floating mb-2">
                        <input class="form-control" type="time" list="time-list" v-model="form.time" placeholder="campo obrigatorio">
                        <datalist id="time-list">
                            <option value="09:00"></option>
                            <option value="10:00"></option>

                        </datalist>
                        <label for="floatingInputValue">Horário</label>
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
export default {
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
        fetchSchedules(){

            

        }

    }
}


</script>
