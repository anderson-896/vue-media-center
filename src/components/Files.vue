<template>
    <div id="main-stage" >
        <scrollView>                
                <rowView>
                    <div class="slid-item title">
                        <svg class="item-icon" viewBox="64 64 896 896" data-icon="folder-open" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"></path></svg>
                        Files
                    </div>
                </rowView>                
                <rowView>
                    <label slot="label">#</label>
                    <div class="slid-item">
                        <img src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Netflix.png" height="75px" alt="">
                    </div>
                    <div class="slid-item">
                        <img src="https://assets0.minhaserie.com.br/uploads/editor_pictures/000/035/976/content_pic.jpg?w=700" height="75px" alt="">
                    </div>
                    <div class="slid-item">
                        <img src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Netflix.png" height="90px" alt="">
                    </div>
                    <div class="slid-item">DA new Teste </div>
                    <div class="slid-item">D123</div>
                </rowView>
            
        </scrollView>

        
    </div>
</template>

<script>

import rowView from './RowView'
import scrollView from './scrollView'

export default {
    data() {
        return {}
    },
    mounted() {
        
    },
    components: {
        rowView,
        scrollView
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


