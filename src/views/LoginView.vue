<template>
    <div class="content">
        <div class="container logo">
            <img src="../assets/logo_1.png" />

        </div>
        <div class="container body">
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                        <label for="floatingInput">Endereço de E-mail</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                        <label for="floatingPassword">Senha</label>
                    </div>

                    <div class="form-group mb-3">
                        <button class="btn btn-primary">Entrar</button>
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

        }
    }

}

</script>