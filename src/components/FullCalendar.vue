<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ timeGridPlugin, dayGridPlugin, interactionPlugin ],
        initialView: 'timeGridFourDay',
        views:{
            timeGridFourDay:{
                type:'timeGrid',
                duration:{ days :3}
            }
        }
      }
    }
  }
}
</script>
<template>
  <FullCalendar :options="calendarOptions" />
</template>