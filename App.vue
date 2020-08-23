<template>
    <div>
        <damageStatistic :vlist='nameArray'></damageStatistic>
        <addStatistic :vlist='nameArray'></addStatistic>
    </div>    
</template>

<script>

import damageStatistic from './components/input'
import addStatistic from './components/output'

export default {
    name: 'App',
    components: {
        damageStatistic,
        addStatistic
    },
    data() {
        return {
            nameArray: [
                    {
                        name: '白字'
                    },
                    {
                        name: '攻击时追加'
                    },
                    {
                        name: '暴击时追加'
                    },
                    {
                        name: '三攻'
                    },
                    {
                        name: '最终'
                    },
                    {
                        name: '属强'
                    },
                    {
                        name: '属性白字'
                    },
                    {
                        name: '技能攻击力'
                    },
                    
                    {
                        name: '力量智力'
                    }
                ]
        }
    }
}
</script>

<style scoped>
    div {
        width: 1000px;
        margin: 30px 30px auto;
    }
</style>