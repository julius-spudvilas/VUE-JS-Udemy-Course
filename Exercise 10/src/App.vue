<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-mydirective:click="clicked">Change color</button>
                <hr>
                <div v-mydirective:mouseenter="mouseEnter" v-mydirective:mouseleave="mouseLeave" style="width: 100px; height: 100px; background-color: lightgreen;"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            mydirective: {
                bind(el, binding) {
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        },
        methods: {
            clicked() {
                alert("Works!")
            },
            mouseEnter() {
                console.log('MouseEnter');
            },
            mouseLeave() {
                console.log('MouseLeave');
            }
        }
    }
</script>

<style>
</style>
