
// Construim l'objecte VUE
var resposta = new Vue({
    el: '#form',
    data: {
        // variables que es mostran a l'HTML amb {{ }}
        nom: '',                
        email: '',
        tlf: '',
        miss:'',
        // variables temporals
        temp_nom: "",           
        temp_email: '',
        temp_tlf: '',
        tem_message: '',
        // variables de validació
        nomCorrect: false,      
        correuCorrect: false,
        tlfCorrect: false,
        missCorrect: false,
        // variables per mostrar validació
        nomVisible: false,      
        correuVisible: false,
        tlfVisible: false,
        messageVisible:false,
    },
    methods: {
        enviar: function(){
            this.nom = this.temp_nom;
            this.correu = this.temp_email;
            this.tlf = this.temp_tlf;
        },
        checkNom: function() {      // funcions per validar els diferents camps del formulari
            this.nomVisible = true;
            var exp = /([A-Za-zÀ-ÖØ-öø-ÿ\s]{3,16})*[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; 
            var nombre =  document.querySelector("#nom"); //
            if (exp.test(this.temp_nom)){
                this.nomCorrect = true;
                nombre.style.border= "1px solid green";
            }else{
                this.nomCorrect = false;
                nombre.style.border= "1px solid red";

            } ;

            // Mètode de validació alternatiu (sense reg ex):

            // var valid = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZáéíóúèòïü "
            // this.nomCorrect = true;
            // for (const lletra of this.temp_nom) {
            //     if (!(valid.includes(lletra) || valid.toLowerCase().includes(lletra))) this.nomCorrect = false;
            // }
        },
        checkCorreu: function() {
            this.correuVisible = true;
            var exp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var correu =  document.querySelector("#correu");
            if (exp.test(this.temp_email)){
                this.correuCorrect = true;
                correu.style.border = "1px solid green";
            } else {
                this.correuCorrect = false;
                correu.style.border = "1px solid red";
            };
        },
        checkTlf: function(){
            this.tlfVisible = true;
            var telefono =  document.querySelector("#telefon");
            if(exp.test(this.temp_tlf)){
                this.tlfCorrect = true;
                telefono.style.border = "1px solid green";
            }else{
                this.tlfCorrect = false;
                telefono.style.border = "1px solid red";
            };

        },
        checkMessage: function(){
            this.messageVisible = true;
            var message = document.querySelector("#misatge");
            if(exp.test(this.temp_tlf)){
                this.missCorrect = true;
                message.style.border= "1px solid green";
            }else{
                this.missCorrect = false;
                message.style.border= "1px solid red";
            };
        }
    }

});
