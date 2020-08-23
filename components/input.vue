<template>
  <ul class="input">
    <li v-for="(ele, index) in vlist" :key="ele.name">
      <span>{{ ele.name }}</span>
      <input
        ref="input"
        v-model="countArray[index].value"
        @change="add(index)"
        @keydown="keyChange"
        @click="keyF(index)"
      />
      <button @click="repeal(index)">X</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    vlist: Array
  },
  data() {
    return {
      countArray: [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        }
      ],
      key: 0,
      row: 3,
      len: this.vlist.length
    };
  },
  methods: {
    add(index) {
      this.$store.commit("Stat/add", { index, value: this.countArray[index].value });
      this.count(index);
    },
    repeal(index) {
      this.$store.commit("Stat/repeal", index);
      this.count(index);
    },
    count(index) {
      this.$store.dispatch("Stat/count", index);
      this.countArray[index].value = "";
    },
    keyChange(e) {
      if (e.keyCode > 36 && e.keyCode < 41) {
        if (e.keyCode == 37) {
          this.key--;
        }
        if (e.keyCode == 38) {
          this.key -= this.row;
        }
        if (e.keyCode == 39) {
          this.key++;
        }
        if (e.keyCode == 40) {
          this.key += this.row;
        }
        this.key = (this.key + this.len) % this.len;
        this.$refs.input[this.key].focus();
      }
    },
    keyF(index) {
      this.key = index;
    }
  },
  mounted() {
    this.$refs.input[0].focus();
  }
};
</script>

<style scoped>
ul {
  position: relative;
}

li {
  list-style: none;
  display: inline-block;
  width: 250px;
  height: 30px;
  line-height: 30px;
  position: relative;
  margin: 5px 10px;
}

input {
  position: absolute;
  top: calc(50% - 11px);
  right: 50px;
}

button {
  position: absolute;
  top: calc(50% - 11px);
  right: 20px;
}

button {
  vertical-align: bottom;
  margin: 0 5px;
}

.input {
  border: 1px solid #008c8c;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
}

input {
  width: 100px;
  margin: 0 5px;
}
</style>