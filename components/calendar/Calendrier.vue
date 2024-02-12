<template>
    <!-- backgroundColor: currentColor, (sur le header) -->
<div class="c-calendrier">
  <div class="calendar">
    <div class="calendar__header" :style="{  height: headerHeight + 'px' }"> 
      <StylesStyleIcon name="chevronLeft" size="smallIcon" background="backgroundW" @click="navigate('prev')"/>
      <h1 :style="{ color: currentTextColor }">{{ monthNames[currentMonth - 1] }} {{ currentYear }}</h1>
      <StylesStyleIcon name="chevronRight" size="smallIcon" background="backgroundW" @click="navigate('next')"/>
    </div>
    <div class="calendar__weekdays">
      <div v-for="(day, index) in weekdayNames" :key="index" :style="weekdayStyles">{{ day.substring(0, 3) }}</div>
    </div>
    <div class="calendar__content" :style="contentStyles" :not="blank">
      <div  v-for="(day, index) in days" :key="index" :class="[day.class, { 'non-clickable': !day.isClickable }]" :style="dayStyles"  @click="day.isClickable && openSidebar(day)" > {{ day.date }} </div>      
    </div>    
    
  </div>
  <Sidebar v-if="isSidebarVisible" @close="isSidebarVisible = false" :day="selectedDay" />
</div>
  </template>
  
  <script>
  import Sidebar from '~/components/menu/sidebar.vue'; // Assurez-vous que le chemin est correct
  export default {
    name: 'Calendar',
    components: {
    Sidebar
  },
    data() {
      return {
        currentYear: new Date().getFullYear(),
        currentMonth: new Date().getMonth() + 1,
        calendarWidth: 755, // Ajustez selon vos besoins
        colors: ["#16a085", "#1abc9c", "#c0392b", "#27ae60", "#FF6860", "#f39c12", "#f1c40f", "#e67e22", "#2ecc71", "#e74c3c", "#d35400", "#2c3e50"],
        monthNames: ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"],
        weekdayNames: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
        days: [],
        isSidebarVisible: false,
      selectedDay: null,
      };
    },
    computed: {
        currentTextColor() {
    const textColors = ["#16a085", "#1abc9c", "#c0392b", "#27ae60", "#FF6860", "#f39c12", "#f1c40f", "#e67e22", "#2ecc71", "#e74c3c", "#d35400", "#2c3e50"];
    return textColors[this.currentMonth - 1];
  },
      currentColor() {
        return this.colors[this.currentMonth - 1];
      },
      headerHeight() {
        return this.calendarWidth / 7;
      },
      dayStyles() {
        const size = this.calendarWidth / 7;
        return { width: size + 'px', height: size + 'px', lineHeight: size + 'px' };
      },
      weekdayStyles() {
        return this.dayStyles;
      },
      contentStyles() {
        return { width: this.calendarWidth + 'px' };
      },
    },
    methods: {
      navigate(direction) {
        if (direction === 'next') {
          if (this.currentMonth === 12) {
            this.currentMonth = 1;
            this.currentYear++;
          } else {
            this.currentMonth++;
          }
        } else if (direction === 'prev') {
          if (this.currentMonth === 1) {
            this.currentMonth = 12;
            this.currentYear--;
          } else {
            this.currentMonth--;
          }
        }
        this.generateCalendar();
      },
      daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
      },
      generateCalendar() {
        const daysCount = this.daysInMonth(this.currentMonth, this.currentYear);
        this.days = [];
        let firstDay = new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
        
        // Convertit le premier jour de la semaine du format Dimanche (0) à Samedi (6) au format Lundi (0) à Dimanche (6)
        firstDay = (firstDay === 0) ? 6 : firstDay - 1;

        for (let i = 0; i < firstDay; i++) {
            this.days.push({ date: '', class: 'blank' });
        }
        
        for (let day = 1; day <= daysCount; day++) {
            const isToday = new Date().getFullYear() === this.currentYear &&
                            new Date().getMonth() + 1 === this.currentMonth &&
                            new Date().getDate() === day;
            this.days.push({ date: day, class: isToday ? 'today' : '' });
        }

        // Ajoute des divs vides pour combler les jours manquants jusqu'à la fin de la semaine
        const totalDays = this.days.length;
        const daysToAdd = totalDays % 7 !== 0 ? 7 - (totalDays % 7) : 0;
        for (let i = 0; i < daysToAdd; i++) {
            this.days.push({ date: '', class: 'blank' });
        }
        const today = new Date();
        this.days.forEach(day => {
          const dayDate = new Date(this.currentYear, this.currentMonth - 1, day.date);
          // Logique pour déterminer si le jour est cliquable
          day.isClickable = dayDate < today; // Simplifié: ajustez selon vos besoins
        });  
        },
        openSidebar(day) {
      this.selectedDay = day;
      this.isSidebarVisible = true;
    },
    },
    mounted() {
      this.generateCalendar();
    }
  };
  </script>
   

   <style lang="scss" scoped>
   .c-calendrier {
  background-color: white;
  margin-bottom: 50px; // Ajoutez une marge en bas pour le footer
  display: flex;
  justify-content: center; // Centre le calendrier horizontalement


.calendar {
  width: 755px; // Augmenté pour un affichage de bureau
  font-family: 'Montserrat', sans-serif;
  background-color: white;
  border: 5px solid black;
  border-radius: 1rem 1rem 0rem 0rem;
  box-shadow: 5px 15px 9px 5px rgba(0,0,0,0.2);
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 60px; // Hauteur augmentée pour un affichage de bureau
    text-align: center;
    background-color: #FFFFFF; // La couleur peut être dynamisée avec Vue.js
    padding: 20px 10px; // Ajustement de l'espacement
    border-radius: 1rem 1rem 0 0; //Arrondi de header du calendrier
    color: #000000;

    h1 {
      font-size: 2em; // Taille de texte augmentée pour une meilleure lisibilité
      flex-grow: 1;
      margin: 0 auto;
      color: v-bind(currentTextColor);
    }

    .icon {
      cursor: pointer; // Ajoute un indicateur visuel que les icônes sont cliquables
      // Ajoutez d'autres styles pour les icônes si nécessaire
        margin-left: 20px;
        margin-right: 20px;
    }
  }
&__content{
    display: flex;
    flex-wrap: wrap;
    width: 755px;
    overflow: hidden;
    justify-content: space-between; // Assure un espacement uniforme

    div     {
        flex: 1 0 14.28%; // 7 jours donc 100% / 7
        height: 60px; // Hauteur augmentée pour un affichage de bureau
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
        color: black;
        font-size: 1.2em; // Taille de police augmentée pour une meilleure visibilité
        //   border-radius: 0 0 1rem 1rem;
        border: 0.1px solid black;
        box-sizing: border-box;
        

      &.blank {
        background-color: black;
        // border:none;
        &:hover  {
        background-color: black;
        cursor: default; // Effet de survol pour indiquer la sélectionnable
        transform: none;
      }
      }

      &:hover{
        background-color: #F8F8F8; // Effet de survol pour indiquer la sélectionnable
        cursor: pointer;
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      &.today  {
        background-color: white; // Couleur de fond du cercle
        color: red; // Couleur du texte
        border: 10px solid black; // Bordure noire
        border-radius: 80%; // Rend le div circulaire        
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
      }
      &.non-clickable {
  pointer-events: none;
  opacity: 0.5;
}
    }
    
}
  &__weekdays{
    display: flex;
    flex-wrap: wrap;
    width: 755px;
    overflow: hidden;
    justify-content: space-between; // Assure un espacement uniforme

    div {
      flex: 1 0 14.28%; // 7 jours donc 100% / 7
      height: 60px; // Hauteur augmentée pour un affichage de bureau
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #FFFFFF;
      color: black;
      font-size: 1.2em; // Taille de police augmentée pour une meilleure visibilité
    //   border-radius: 0 0 1rem 1rem;
    // border: 0.1px solid black;
      border-top: 7.5px solid black;
      border-bottom: 7.5px solid black ;
      border-left: 0.1px solid black;
      box-sizing: border-box;
      font-weight: 600;

      &.blank {
        background-color: #E8E8E8;
        // border:none;
      }

      &:hover {
        // background-color: #F8F8F8; 
        color: red;// Effet de survol pour indiquer la sélectionnable
      }

    //   &.today {
    //     background-color: #FFD700; // Couleur de fond pour 'aujourd'hui'
    //     color: #000000;
    //     font-weight: bold; // Rend le texte plus lisible
    //     color: red;
    //   }
    }
  }

}
}
   </style>
   

