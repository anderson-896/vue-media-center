<template>
    <div class="line-slider">
        <slot name="label"/>
        <vue-tiny-slider class="row-slid-item"  v-bind="lineOptions">
            <slot/>
        </vue-tiny-slider>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lineOptions: {                
                mouseDrag: true,
                controls: false,
                // container: "#center",                
                autoWidth: true,
                items: 1,
                // center: true,
                rewind: true,
                speed: 400,
                // arrowKeys: true,
            }
        }
    }
}
</script>

<style scoped>
    .line-slider label {
        display: inline;
        font-size: 3vw;
    }

    .line-slider.tns-slide-active label, .title {
        /* margin-left: -160%; */
        color: #84b3d4;
    }

    .title {
        /* margin-left: -60; */
        color: #84b3d4;
    }
</style>

<style>
    #tns1 {
        transition-duration: 0.4s;            
    }
    .tns-ovh {
        overflow: visible !important;
    }

    .tns-slide-active .tns-slide-active {
        color: rgba(255, 255, 255, 0.80);
        transition: color 1.1s;
        transition: transform .35s;
        transition-delay: 0.2s;
       

    }

    .tns-item {
        font-size: 2vw;
        font-family: 'Quicksand', sans-serif;
        font-weight: 100;
        text-align: center;
        padding: 1vw 5vw 1vw 1vw;
        background: transparent;
        user-select: none;
        margin: 1vw 9vw 1px 0;
    }


    .line-slider.tns-slide-active .slid-item.tns-slide-active{
        transition: transform .3s ease-out;
        transform: scale(1.5) translateY(0) translateX(10%);
        /* padding: 1vw 9vw 1px 0; */
        border: 1px solid #84b3d4;
        border-radius: 3px;
        padding: .5vw;
        /* margin: 60% 9vw 1px 0; */
        margin-right: 7vw;
        display: inline-flex;
    }

    .tns-item div {
        white-space: nowrap;
    }
    .line-slider.tns-item,
    .line-slider .tns-item {
        transition: all .3s ease-out;
    }
    

    .line-slider:not(.tns-slide-active) .slid-item:nth-child(n+2) {
        /* padding-top: 1vw; */
        
        opacity: .2;
    }
    .line-slider:not(.tns-slide-active) .slid-item:nth-child(n+3) {
        opacity: .1;
    }
    .line-slider:not(.tns-slide-active) .slid-item:nth-child(n+4) {
        opacity: .05;
    }

</style>
