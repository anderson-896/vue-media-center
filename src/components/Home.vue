<template>
    <div id="main-stage" >
        <div class="row-slider">
            <vue-tiny-slider v-bind="rowOptions" ref="mainSlider" :on-init="onInit" >
                <div class="line-slider">
                    <vue-tiny-slider class="row-slid-item"  v-bind="lineOptions">
                        <div class="slid-item title">
                            <svg viewBox="64 64 896 896" data-icon="mobile" width="1em" height="1em" fill="currentColor" aria-hidden="true" class=""><path d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path></svg>
                            My Phone
                        </div>
                    </vue-tiny-slider>
                </div>
                <div class="line-slider">
                    <vue-tiny-slider class="row-slid-item"  v-bind="lineOptions">
                        <div class="slid-item">
                            <svg class="item-icon" viewBox="64 64 896 896" data-icon="picture" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"></path></svg>
                            Imagens
                        </div>
                        <div class="slid-item">
                            <svg class="item-icon" viewBox="64 64 896 896" data-icon="sound" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3 16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1zM586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221v582zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16zm-41.9 261.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8zM760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8L760 344z"></path></svg>
                            Áudio 
                        </div>
                        <div class="slid-item">
                            <svg class="item-icon" viewBox="64 64 896 896" data-icon="play-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8zm-257.6 134V390.9L628.5 512 461.8 633.1z"></path></svg>
                            Vídeos
                        </div>
                        <div class="slid-item">
                            <svg class="item-icon" viewBox="64 64 896 896" data-icon="folder-open" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"></path></svg>
                            Documentos
                        </div>
                    </vue-tiny-slider>
                </div>
                <div class="line-slider">
                    <label>A</label>
                    <vue-tiny-slider ref="sl2" class="row-slid-item"  v-bind="lineOptions">                        
                        <div class="slid-item">Abc</div>
                        <div class="slid-item">ANewTeste </div>
                        <div class="slid-item">Abssi</div>
                        <div class="slid-item">AOpt1</div>
                        <div class="slid-item">A new Teste </div>
                        <div class="slid-item">A123</div>
                    </vue-tiny-slider>
                </div>
                <div class="line-slider">
                    <label>B</label>
                    <vue-tiny-slider ref="sl3" class="row-slid-item" v-bind="lineOptions">
                        <div class="slid-item" @click="handler">
                            <div>BOpt1</div>
                            <!-- <div class="item-text">And something else</div> -->
                        </div>
                        <div class="slid-item">B new Teste </div>
                        <div class="slid-item">B123</div>
                    </vue-tiny-slider>
                </div>
                <div class="line-slider">
                    <label>C</label>
                    <vue-tiny-slider ref="sl2" class="row-slid-item"  v-bind="lineOptions">
                        <div class="slid-item">CHome</div>
                        <div class="slid-item">CNewTeste </div>
                        <div class="slid-item">CAbssi</div>
                    </vue-tiny-slider>
                </div>
                <div class="line-slider">
                    <label>D</label>
                    <vue-tiny-slider ref="sl3" class="row-slid-item" v-bind="lineOptions">
                        <div class="slid-item">DOpt1</div>
                        <div class="slid-item">DA new Teste </div>
                        <div class="slid-item">D123</div>
                    </vue-tiny-slider>
                </div>
                <div class="line-slider">
                    <label>N</label>
                    <vue-tiny-slider ref="sl3" class="row-slid-item" v-bind="lineOptions">
                        <div class="slid-item">
                            <img src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Netflix.png" height="75px" alt="">
                        </div>
                        <div class="slid-item">
                            <img src="https://assets0.minhaserie.com.br/uploads/editor_pictures/000/035/976/content_pic.jpg?w=700" height="75px" alt="">
                        </div>
                        <div class="slid-item">
                            <img src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Netflix.png" height="75px" alt="">
                        </div>
                        <div class="slid-item">DA new Teste </div>
                        <div class="slid-item">D123</div>
                    </vue-tiny-slider>
                </div>
            </vue-tiny-slider>
        </div>
    </div>
</template>

<script>


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
        handler() {
            alert('handler')
        },
        doSomething(e) {
            // console.log('some', e.key)
            
            let activeIndex = this.$refs.mainSlider.slider.getInfo().index;
            if(e.key === 'ArrowUp') {
                this.resetAll();
                this.$refs.mainSlider.slider.goTo('prev');
            }
            else if(e.key === 'ArrowDown') {
                this.resetAll();
                this.$refs.mainSlider.slider.goTo('next');                
            }
            else if(e.key === 'ArrowLeft') {
                this.$refs.mainSlider.$children[activeIndex].slider.goTo('prev');
            }
            else if(e.key === 'ArrowRight') {
                this.$refs.mainSlider.$children[activeIndex].slider.goTo('next');
            }
            else if(e.key === 'Enter') {
                alert('Enter ' + activeIndex + ' - ' + this.$refs.mainSlider.$children[activeIndex].slider.getInfo().index);
                console.log(this.$refs.mainSlider.$children[activeIndex].$el)
                this.$refs.mainSlider.$children[activeIndex].$el.click();
            }
            if(this.$refs.mainSlider.slider.getInfo().index === 0) {
                this.$refs.mainSlider.slider.goTo(1);
            }
            // this.$refs.mainSlider.slider.updateSliderHeight();
            console.dir(this.$refs.mainSlider.slider)
        },
        resetAll() {
            this.$refs.mainSlider.$children.forEach(sld => {
                sld.slider.goTo(0);
            });
        }
    },
    created() {
    //   const component = this;
    //   this.handler = function (e) {
    //     component.$emit('keyup', e);
    //   }
      window.addEventListener('keyup', this.doSomething);
    },
    beforeDestroy() {
      window.removeEventListener('keyup', this.doSomething);
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
        margin-left: -2.5vw;
        color: #84b3d4;
    }
    

    .item-icon {
        display: none;
        margin-bottom: -4px;
    }

    .line-slider.tns-slide-active .slid-item.tns-slide-active .item-icon {
        display: inline-block;
        margin-top: 2%;
        width: 3vw;
        margin-right: 3%;
    }

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
    }

    .row-slider {
        height: 30vh;
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
        transform: scale(1.5) translateY(-15%) translateX(10%);
        /* padding: 1vw 9vw 1px 0; */
        border: 1px solid #84b3d4;
        border-radius: 3px;
        padding: .5vw;
        margin: 4vw 9vw 1px 0;
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


