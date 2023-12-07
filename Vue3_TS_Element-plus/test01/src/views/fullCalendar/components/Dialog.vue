<template>
  <el-dialog v-model="dialog" v-if="dialog" style="height: 900px; width: 900px" lazy="true" :open-delay="4">
    <div style="height: 700px; width: 700px">
      <FullCalendar ref="calendarRef" :options="calendarOptions">
        <!-- <template #eventContent="{ timeText, event }">
            <b>{{ timeText }}</b>
            <i>{{ event.title }}</i>
        </template> -->
      </FullCalendar>
    </div>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref, onMounted, nextTick, computed } from 'vue'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin  from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
const props = defineProps({
  model: {
    type: Boolean,
    default: false
  }
})
const dialog = computed(() => {
  return props.model
})

const calendarOptions =  ref({
       plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
       initialView: "dayGridMonth",
       width: '700px',
       height: '700px',
       customButtons: {
         myCustomButton: {
           text: "custom",
           click: function () {
             alert("clicked the custom button!");
           },
         },
       },
       headerToolbar: {
         left: "dayGridMonth,timeGridWeek,timeGridDay myCustomButton",
         center: "title",
         right: "prevYear,prev,next,nextYear today",
       },
       events: [
         {
           title: "nishizhu",
           start: "2021-09-07",
           end: "2021-09-09",
         }
       ], //事件事件+文本
       eventColor: "#378006", //事件背景颜色
       eventClick: (info) => {
         alert("Event: " + info.event.title);
         info.el.style.borderColor = "red";
       },
       dateClick: (info) => {
         alert("Clicked on: " + info.dateStr);
         info.dayEl.style.backgroundColor = "red";
       },
       editable: true,
       dayMaxEventRows: 2,
     })
onMounted(() => {
  nextTick(() => {
    calendarOptions.value.events = [
         {
           title: "nishizhu",
           start: "2021-09-07",
           end: "2021-09-09",
         }
       ]
  })
})
</script>