<template>
    <div class="jeje">
        <button class="btn7"  @click="$emit('click')">{{ text? text: 'button 7' }}</button>
    </div>
</template>

<script>
export default {
    name: 'ButtonCustom7',
    props:{ 
        text: {
            type: String,
            required: false
        }
    }
}
</script>

<style>
.jeje{
    position: relative;
}
.btn7{
 position: relative;
 border: none;
 color: black;
 width: 11em;
 height: 3em;
 line-height: 2em;
 text-align: center;
 background: linear-gradient(
    90deg, #03a9f4, #f441a5,
    #ffeb3b, #03a9f4
 );
 background-size: 300%;
 border-radius: 30px;
 border: 1px solid black;
 text-transform: uppercase;
 cursor: pointer;
 z-index: 1;
}
.btn7:hover{
    animation: animation 8s linear infinite;
}

@keyframes animation {
    0%{
        background-position: 0%;
    }
    100% {
        background-position: 500%;
    }
}
.btn7:before{
    border: 4px solid rgb(151, 33, 255, 0.2);

    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
    background: linear-gradient(
    90deg, #03a9f4, #f441a5,
    #ffeb3b, #03a9f4
    );
    background-size: 500% ;
    border-radius: 35px;
    transition: 0.4s;
    animation: animation 8s linear infinite;
}

.btn7:hover::before {
    filter: blur(20px);
}
</style>