<template>
    <li class="list-group-item" @click="serverSelected" style="cursor: pointer">
        <p>Server #{{ server.id }}</p>
    </li>
</template>

<script>
import { serverBus } from '../../main';
export default {
    props: {
        server: {
            type: Object,
        }
    },
    methods: {
        serverSelected() {
            serverBus.$emit('serverSelected', this.server);
        }
    }
}
</script>