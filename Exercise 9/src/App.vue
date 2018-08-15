<template>
    <div class="container">
        <form>
            <div class="row" v-if="!submitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <label for="name">
                        <input type="text" v-model="userData.name">
                    </label>
                    <!-- Mail -->
                    <label for="mail">
                        <input type="email" v-model="userData.mail">
                    </label>
                    <!-- Password -->
                    <label for="password">
                        <input type="password" v-model="userData.password">
                    </label>
                    <!-- Store Data? Yes/No -->
                    <label for="storedata">
                        <input type="radio" value="Yes" v-model="storedata">
                        <input type="radio" value="No" v-model="storedata">
                    </label>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <button @click.prevent="submitForm">Submit</button>
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <app-full-name v-model="userData.name"></app-full-name>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.name }} </p>
                        <p>Mail: {{ userData.mail }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ storedata }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import fullName from "./fullname.vue";
    export default {
        data() {
            return {
                userData: {
                    name: '',
                    mail: '',
                    password: ''
                },
                storedata: '',
                submitted: false

            }
        },
        components: {
            appFullName: fullName
        },
        methods: {
            submitForm() {
                this.submitted = true
            }
        }
    }
</script>

<style>
</style>
