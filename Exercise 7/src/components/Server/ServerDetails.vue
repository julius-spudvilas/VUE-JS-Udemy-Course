<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="!server">Please select a server</div>
        <div v-else>
                <p >Server #{{server.id}} selected, Status {{ server.status}}</p>
                <hr>
                <button @click="resetStatus">Reset Status</button>
        </div>
    </div>

</template>

<script>
import { serverBus } from '../../main';
export default {
    data () {
        return {
            server: null
        }
    },
    created() {
        serverBus.$on('serverSelected', (server) => {
            this.server = server;
        });
    },
    methods: {
        resetStatus() {
            this.server.status = 'Normal';
        }
    }
}
</script>

<style>

</style>
