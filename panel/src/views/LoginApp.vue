<template>
    <div class="d-flex align-items-center bg-auth border-top border-top-2 border-primary main-container">
        <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-5 col-xl-4 my-5">

            <!-- Heading -->
            <h1 class="display-4 text-center mb-3">
                Iniciar sesión
            </h1>

            <!-- Subheading -->
            <p class="text-muted text-center mb-5">
                Panel administrador
            </p>

            <!-- Form -->
            <form @submit.prevent="onSubmit">

                <!-- Email address -->
                <div class="form-group">

                <!-- Label -->
                <label class="form-label w-100 text-start">
                    Correo electrónico
                </label>

                <!-- Input -->
                <input v-model="email"
                type="email" class="form-control" 
                placeholder="name@address.com">

                </div>

                <!-- Password -->
                <div class="form-group">
                <div class="row">
                    <div class="col">

                    <!-- Label -->
                    <label class="form-label  w-100 text-start">
                        Contraseña
                    </label>

                    </div>
                    <div class="col-auto">

                    <!-- Help text -->
                    <a href="password-reset-cover.html" class="form-text small text-muted">
                        Olvídate la contraseña?
                    </a>

                    </div>
                </div> <!-- / .row -->

                <!-- Input group -->
                <div class="input-group input-group-merge">

                    <!-- Input -->
                    <input  v-model="password"
                    class="form-control" 
                    type="password" 
                    placeholder="Enter your password">

                    <!-- Icon -->
                    <span class="input-group-text">
                    <i class="fe fe-eye"></i>
                    </span>

                </div>
                </div>

                <div class="alert alert-danger" 
                    :class="msg_error? 'animate__bounceIn': 'animate__fadeOut'" 
                    role="alert" v-show="msg_error">
                    {{ msg_error }}
                </div>

                <!-- Submit -->
                <button class="btn btn-lg w-100 btn-primary mb-3" type="submit">
                   Ingresar
                </button>
            </form>

            </div>
        </div> <!-- / .row -->
        </div> <!-- / .container -->
    </div>
</template>
<style>
#app {
    height: 100vh;
}
.main-container {
    height: 100%;
}
</style>
<script>
export default {
    name: 'LoginApp',
    props: {},
    data() {
        return {
            email: '',
            password: '',
            msg_error: '',
        };
    },
    methods: {
       onSubmit() {
           console.log('Validating login credentials...');
           if (!this.email) {
               this.msg_error = 'El Email es requerido.';
               return;
            }
            if (!this.password) {
                this.msg_error = 'La contraseña es requerida.';
                return;
            }
            if (this.email && this.password) {
                // Simulate a successful login
              this.msg_error = '';
              console.log('Login successful for:', this.email);
              // Redirect or perform further actions here
           } 
        },
    },
}
</script>