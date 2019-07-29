<template>
    
        <div class="row-slider">
            <vue-tiny-slider v-bind="rowOptions" ref="mainSlider" :on-init="onInit" >
                <slot/>
            </vue-tiny-slider>
        </div>
  
</template>

<script>

import rowView from './RowView'
export default {
    data() {
        return {
            initialized: false,
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
            },
            rowOptions: {
                mouseDrag: true,
                // arrowKeys: true,
                controls: false,
                // autoWidth: true,
                axis: 'vertical',
                items: 1,
                rewind: true
            }
        }
    },
    mounted() {
        
    },
    methods: {
        onInit() {
            setTimeout(() => {
                this.$refs.mainSlider.slider.goTo(1);
            }, 1000);
        },
        onKeyUp(e) {
            
            let activeIndex = this.$refs.mainSlider.slider.getInfo().index;
            if(e.key === 'ArrowUp') {
                this.resetAll();
                this.$refs.mainSlider.slider.goTo('prev');
                if(this.$refs.mainSlider.slider.getInfo().index === 0) {
                    this.$refs.mainSlider.slider.goTo('prev');
                }
            }
            else if(e.key === 'ArrowDown') {
                this.resetAll();
                this.$refs.mainSlider.slider.goTo('next');
                if(this.$refs.mainSlider.slider.getInfo().index === 0) {
                    this.$refs.mainSlider.slider.goTo('next');
                }              
            }
            else if(e.key === 'ArrowLeft') {
                this.$refs.mainSlider.$children[activeIndex].$children[0].slider.goTo('prev');
            }
            else if(e.key === 'ArrowRight') {
                this.$refs.mainSlider.$children[activeIndex].$children[0].slider.goTo('next');
            }
            else if(e.key === 'Enter') {
                // alert('Enter ' + activeIndex + ' - ' + this.$refs.mainSlider.$children[activeIndex].slider.getInfo().index);
                let line = this.$refs.mainSlider.$children[activeIndex].$children[0];
                console.log(this.$refs.mainSlider.$children[activeIndex].$children[0].slider)
                let innerActive = line.slider.getInfo().index;
                console.log(line);
                line.$children[innerActive].$el.click();
            }
            
        },
        resetAll() {
            this.$refs.mainSlider.$children.forEach(sld => {
                if(sld.$children[0]) {
                    sld.$children[0].slider.goTo(0);
                }
            });
        }
    },
    created() {
      window.addEventListener('keyup', this.onKeyUp);
    },
    beforeDestroy() {
      window.removeEventListener('keyup', this.onKeyUp);
    },
    components: {
        rowView
    }
}
</script>

<style scoped>
    
    #main-stage {
        background-color: #628db6;
        /* background-image: url('https://www.mediacentermaster.com/images/WMC_background.jpg'); */
        background: radial-gradient(circle, rgba(63,83,98,1) 0%, rgba(37,63,79,1) 47%, rgba(31,58,75,1) 61%);
        background-size: cover;
        background-position: -200px -600%;
        /* background-repeat: no-repeat; */
        height: 100vh;
        /* color: white; */
        font-family: 'Quicksand', sans-serif;;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .line-slider {
        width: 100px;
        margin-left: 20vw;
        text-align: left;
    }

    .row-slider {
        height: 30vh;
        margin-top: -15vh;
    }
    
    .slid-item {
        white-space: nowrap !important;
        text-align: left;
        margin: 40px 0;
    }

    .item-text {
        font-size: 22px;
        margin-bottom: 60px;
    }
</style>


