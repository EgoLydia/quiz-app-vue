<template>
  <div id="quest-card">
    <h3>Question {{ index + 1 }}</h3>
    <p v-html="question.question"></p>
    <div class="options">
      <options-comp
        :isChecked="question.chosenAnswer === option"
        @chosen="atChosen"
        :question="question.question"
        :value="option"
        :index="index"
        v-for="(option, index) in questionOptions"
        :key="index"
      />
    </div>
  </div>
</template>

<script>
import OptionsComp from "./OptionsComponent.vue";
export default {
  components: {
    OptionsComp,
  },
  props: {
    index: {
      default: 0,
      type: Number,
    },
    question: {
      default: {
        question: "who owns you?",
        incorrect_answers: ["You", "Yourself", "Yours"],
        correct_answer: "Us",
      },
    },
  },
  methods: {
    atChosen(value) {
      this.$emit("checked", { value, qIndex: this.index });
    },
  },
  computed: {
    questionOptions() {
      return [
        ...this.question.incorrect_answers,
        this.question.correct_answer,
      ].sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style></style>
