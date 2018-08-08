<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p>{{ name }}</p>
        <p>{{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                :name="name" 
                @nameWasReset="name = $event"
                :resetFn="resetName" 
                :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                :userAge="age"
                :userAgeFn="changeAge"
                @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data () {
            return {
                name: 'Julius',
                age: 27
            }
        },

        methods: {
          changeName() {
              this.name = 'Tester'
          },
          resetName() {
              this.name = 'Julius'
          },
          changeAge() {
              this.age = 31;
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
