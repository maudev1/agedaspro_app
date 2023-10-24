<template>
    <div class="content">
        <div class="container logo">
            <img src="../assets/logo_1.png" />

        </div>
        <div class="container body">
            <div class="row">
                <div class="col-sm-12">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" v-model="userData.email" vid="floatingInput"
                            placeholder="name@example.com">
                        <label for="floatingInput">Endereço de E-mail</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" v-model="userData.password" id="floatingPassword"
                            placeholder="Password">
                        <label for="floatingPassword">Senha</label>
                    </div>

                    <div class="form-group mb-3">
                        <button v-on:click="login" class="btn btn-primary">Entrar</button>
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
            userData: {
                email: null,
                password: null,
                captcha: null
            }

        }
    },

    methods: {
        login: async function () {

            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'appication/json;charset=utf-8',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'appication/json'
                },
                body: JSON.stringify(this.userData)
            };

            let response = await fetch(`${this.$store.state.url}/auth/login`, options);

            if (response.ok) {
                let json = await response.json();

                let token = json.token;

                this.$store.commit('setAccessToken', token)

            } else {
                console.log(response)
            }


        },


    }

}

</script>