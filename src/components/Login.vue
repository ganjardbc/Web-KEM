<template>
    <div class="app-login gradient-red">
        <div class="login-small">
        	<h1 class="txt-site txt-main">
        		Login
        	</h1>
        	<div>
        		<form @submit.prevent="doLogin()">
	        		<div class="margin-15px">
	        			<input 
                            type="number" 
                            name="nisn" 
                            id="nisn" 
                            class="txt txt-primary-color"
                            placeholder="NISN"
                            required="required"
                            style="width: 100%;" 
                            v-model="user.NISN">
                        <div class="padding-top-10px" v-if="frameErrNISN">
		                    <div class="txt-site txt-11 txt-danger">
		                        {{ messageNISN }}
		                    </div>
		                </div>
	        		</div>

	        		<div class="margin-15px">
	        			<input 
                            type="password" 
                            name="password" 
                            id="password" 
                            class="txt txt-primary-color"
                            required="required"
                            placeholder="Password"
                            style="width: 100%;" 
                            v-model="user.password">
                        <div class="padding-top-10px" v-if="frameErrPass">
		                    <div class="txt-site txt-11 txt-danger">
		                        {{ messagePass }}
		                    </div>
		                </div>

	        		</div>

	        		<div class="margin-15px">
	        			<input 
	                        type="submit" 
	                        :value="valLogin" 
	                        :disabled="disLogin"
	                        class="btn btn-red btn-width-all">
	        		</div>
	        	</form>
        	</div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            url: 'https://cors-anywhere.herokuapp.com/http://apikem.asmilahotel.space/login',
            message: '',
            messageNISN: '',
            messagePass: '',
            valLogin: 'Login',
            disLogin: false,
            frameErr: false,
            frameErrNISN: false,
            frameErrPass: false,
            user: {
                NISN: '',
                password: ''
            }
        }
    },
    methods: {
        doLogin () {
            var vm = this;
            // this.frameErr = false;
            // this.frameErrNISN = false;
            // this.frameErrPass = false;
            // this.valLogin = 'Please Wait...';
            // this.disLogin = true;
            console.log(this.user.NISN)
            axios.post(this.url, {
                'nisn': this.user.NISN,
                'password': this.user.password
            })
            .then(response => {
                console.log(response)
                // if (response.data.status == 'unauthorized') 
                // {
                //     vm.frameErr = true;
                //     vm.message = e.response.responseText;
                //     vm.valLogin = 'Try Again';
                //     vm.disLogin = false;
                // }
                // if (response.data.status == 'invalide') 
                // {
                //     vm.valLogin = 'Try again';
                //     vm.disLogin = false;
                //     if (response.data.message.password) 
                //     {
                //         vm.frameErrPass = true;
                //         vm.messagePass = response.data.message.password[0];
                //     }
                //     if (response.data.message.NISN) 
                //     {
                //         vm.frameErrNISN = true;
                //         vm.messageNISN = response.data.message.NISN[0];
                //     }
                // }
                // if (response.data.status == 'success') 
                // {
                //     vm.valLogin = 'Success';
                //     vm.disLogin = true;
                //     this.$cookie.set('id', response.data.me.id, 2);
                //     this.$cookie.set('name', response.data.me.name, 2);
                //     this.$cookie.set('username', response.data.me.username, 2);
                //     this.$cookie.set('foto', response.data.me.foto, 2);
                //     window.location = vm.initUrl;
                    
                // }
            })
            .catch(e => {
                //main error
                // if (e.response.status == 405) 
                // {
                //     var msg = e.response.statusText;
                // }
                // vm.frameErr = true;
                // vm.message = msg;
                // vm.valLogin = 'Try Again';
                // vm.disLogin = false;
                console.log(e);
            });
        }
    },
    beforeCreate: function () {
        if (this.$cookie.get('id')) 
        {
            this.$router.push('/');
        }
    }
}
</script>
