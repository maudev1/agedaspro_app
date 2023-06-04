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
                        <input type="text" class="form-control" id="floatingInputValue" placeholder="campo obrigatorio"
                            value="">
                        <label for="floatingInputValue">Nome</label>
                    </div>
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="floatingInputValue" placeholder="campo obrigatorio"
                            value="">
                        <label for="floatingInputValue">Telefone ou Celular</label>
                    </div>
                    <div class="form-floating mb-2">
                        <textarea class="form-control"></textarea>
                        <label for="floatingInputValue">Observação</label>
                    </div>

                    <div class="mt-4 mb-4">

                        <p>Data e horário</p>

                    </div>

                    <div class="form-floating mb-2">
                        <input type="date" class="form-control" id="floatingInputValue" placeholder="campo obrigatorio"
                            value="">
                        <label for="floatingInputValue">Data</label>
                    </div>

                    <div class="form-floating mb-2">
                        <input type="time" class="form-control" id="floatingInputValue" placeholder="campo obrigatorio"
                            value="">
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
            title: "Novo Agendamento"


        }

    }
}


</script>
