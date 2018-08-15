<template>
    <label for="name">
        <input type="text" name="FirstName" @change="nameChange" v-model="fullName.firstName">
        <input type="text" name="LastName" @change="nameChange" v-model="fullName.lastName">
    </label>
</template>

<script>
export default {
  data() {
    return {
      fullName: {
        firstName: this.value.split(' ')[0] || '',
        lastName: this.value.split(' ')[1] || ''
      }
    }
  },
  props: ['value'],
  methods: {
    nameChange(event) {
      let names = []

      Object.keys(this.fullName).forEach(key => {
        names.push(this.fullName[key])
      })

      this.$emit('input', names.join(' '))
    }
  },
  watch: {
    value() {
      this.fullName.firstName = this.value.split(' ')[0]
      this.fullName.lastName = this.value.split(' ')[1]
    }
  }
}
</script>
