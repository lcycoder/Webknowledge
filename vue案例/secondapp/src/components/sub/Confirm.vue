<template>
    <div class="confirm-button">
        <button @click = "getbuttonClick">
            {{ text || '确认'}}
        </button>
    </div>
</template>
<script>
export default {
    name:"confirm-button",
    props:["text"],
    data(){
        return {
            msg:true
        };
    },
    methods:{
        getButtonClick(){
            this.$emit("message",this.msg);
        }
    }
}
</script>

