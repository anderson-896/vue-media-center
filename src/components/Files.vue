<template>
    <div id="main-stage" >
        <scrollView>                
                <rowView>
                    <div class="slid-item title" @click="$router.go(-1)">
                        <svg viewBox="64 64 896 896" data-icon="arrow-left" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
                        &nbsp;&nbsp;
                        <svg class="item-icon" viewBox="64 64 896 896" data-icon="folder-open" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"></path></svg>
                        
                        Files
                    </div>
                </rowView>                
                <rowView>
                    <label slot="label">#</label>
                    <div class="slid-item">
                        <svg class="item-icon" viewBox="64 64 896 896" data-icon="folder-open" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 0 0-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"></path></svg>
                        &nbsp; folder1
                    </div>
                </rowView>
                <rowView>
                    <label slot="label">A</label>                    
                    <div class="slid-item">
                        <svg viewBox="64 64 896 896" data-icon="file" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z"></path></svg>
                        &nbsp; Abc.txt
                    </div>
                    <div class="slid-item">
                        <svg viewBox="64 64 896 896" data-icon="file" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z"></path></svg>
                        &nbsp; Another.txt
                    </div>                   
                </rowView>
                <rowView>
                    <label slot="label">M</label>                    
                    <div class="slid-item">
                        <svg viewBox="64 64 896 896" data-icon="customer-service" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384zM328 632v192H200V632h128zm496 192H696V632h128v192z"></path></svg>
                        &nbsp; Music.mp3
                    </div>
                    <div class="slid-item">
                        <svg viewBox="64 64 896 896" data-icon="customer-service" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M512 128c-212.1 0-384 171.9-384 384v360c0 13.3 10.7 24 24 24h184c35.3 0 64-28.7 64-64V624c0-35.3-28.7-64-64-64H200v-48c0-172.3 139.7-312 312-312s312 139.7 312 312v48H688c-35.3 0-64 28.7-64 64v208c0 35.3 28.7 64 64 64h184c13.3 0 24-10.7 24-24V512c0-212.1-171.9-384-384-384zM328 632v192H200V632h128zm496 192H696V632h128v192z"></path></svg>
                        &nbsp; Music2.mp3
                    </div>                   
                </rowView>
                <rowView>
                    <label slot="label">P</label>                    
                    <div class="slid-item">
                        <svg viewBox="64 64 896 896" data-icon="picture" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"></path></svg>
                        &nbsp; Picture.jpg
                    </div>
                    <div class="slid-item">
                        <svg viewBox="64 64 896 896" data-icon="picture" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2zM304 456a88 88 0 1 0 0-176 88 88 0 0 0 0 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z"></path></svg>
                        &nbsp; Picture2.png
                    </div>                   
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
        background-color: #2f4961;
        /* background-image: url('https://www.mediacentermaster.com/images/WMC_background.jpg'); */
        background: radial-gradient(circle, rgb(52, 68, 80) 0%, rgba(37,63,79,1) 47%, rgb(17, 49, 68) 61%);
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


