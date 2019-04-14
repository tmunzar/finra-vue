<template>
<div class="fullpage-container">
    <div class="fullpage-wp" v-fullpage="opts" ref="example">
        <div class="page-1 page">
            <div class="container" v-animate="{value: 'fadeIn', delay: 0}">

                <!-- Hacky Stuff here -->
                <div id="isClick" :data-on-click="buttonClick"></div>
                <!-- /Hacky Stuff here -->

                <h1 class="title">
                    Before we start, Could you tell us more about yourself?
                </h1>
                <div>
                    <div class="field">
                        <b-radio v-model="questionOne"
                            size="is-medium"
                            native-value="1">
                            I’m an individual looking for investment opportunities.
                        </b-radio>
                    </div>
                    <div class="field">
                        <b-radio v-model="questionOne"
                            size="is-medium"
                            native-value="2">
                            I’m a representative for a business, organization, or institution.
                        </b-radio>
                    </div>
                    <div class="field">
                        <b-radio v-model="questionOne"
                            size="is-medium"
                            native-value="3">
                            I’m a representative for an investment company, business development company, or pooled investment vehicles.
                        </b-radio>
                    </div>
                </div>
                <div class="actions">
                    <b-button type="is-primary" :disabled="!questionOne" @click="handleQuestionOne">Submit</b-button>
                </div>
            </div>
        </div>
        <div class="page-2 page">
            <div class="container" v-animate="{value: 'fadeIn', delay: 0}">
                <h1 class="title">
                    Do you have a clear idea about the amount or type of investment you’re going to make?
                </h1>
                <div>
                    <div class="field">
                        <b-radio v-model="questionTwo"
                            size="is-medium"
                            native-value="Y">
                            Yes
                        </b-radio>
                    </div>
                    <div class="field">
                        <b-radio v-model="questionTwo"
                            size="is-medium"
                            native-value="N">
                            No
                        </b-radio>
                    </div>
                </div>
                <div class="actions">
                    <b-button type="is-primary" :disabled="!questionTwo" @click="handleQuestionTwo">Submit</b-button>
                    <b-button @click="movePrev">Back</b-button>
                </div>
            </div>
        </div>
        <div class="page-3 page">
            <div class="container" v-animate="{value: 'fadeIn', delay: 0}">
                <h1 class="title">
                    What’s the approximate amount of capital you are (or intend to) invest?
                </h1>
                <div>
                    <div class="field">
                        <b-radio v-model="questionThree"
                                    native-value="1" 
                                    size="is-medium">
                            Less than 25,000
                        </b-radio>
                    </div>
                    <div class="field">
                        <b-radio v-model="questionThree"
                                    native-value="2" 
                                    size="is-medium">
                            25,000 - 75,000
                        </b-radio>
                    </div>
                    <div class="field">
                        <b-radio v-model="questionThree"
                                    native-value="3" 
                                    size="is-medium">
                            75,000 - 100,000
                        </b-radio>
                    </div>
                    <div class="field">
                        <b-radio v-model="questionThree"
                                    native-value="4" 
                                    size="is-medium">
                            100,000 - 200,000
                        </b-radio>
                    </div>
                    <div class="field">
                        <b-radio v-model="questionThree"
                                    native-value="5" 
                                    size="is-medium">
                            More than 200,000
                        </b-radio>
                    </div>
                </div>
                <div class="actions">
                    <b-button type="is-primary" :disabled="!questionThree" @click="handleQuestionThree">Submit</b-button>
                    <b-button @click="movePrev">Back</b-button>
                </div>
            </div>
        </div>
        <div class="page-4 page">
            <div class="container" v-animate="{value: 'fadeIn', delay: 0}">
                <h1 class="title">
                    What kind of service do you need?
                </h1>
                <div>
                    <div class="field">
                        <b-checkbox v-model="questionFour"
                                    native-value="1" 
                                    size="is-medium">
                            Financial Planning
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionFour"
                                    native-value="2" 
                                    size="is-medium">
                            Portfolio Management
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionFour"
                                    native-value="3" 
                                    size="is-medium">
                            Asset Management
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionFour"
                                    native-value="4" 
                                    size="is-medium">
                            Pension Consulting
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionFour"
                                    native-value="5" 
                                    size="is-medium">
                            Private Fund Management
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionFour"
                                    native-value="6" 
                                    size="is-medium">
                            Security ratings or pricing
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionFour"
                                    native-value="7" 
                                    size="is-medium">
                            Market timing
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionFour"
                                    native-value="8" 
                                    size="is-medium">
                            Educational seminars/workshops
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionFour"
                                    native-value="9" 
                                    size="is-medium">
                            Other
                        </b-checkbox>
                    </div>
                </div>
                <div class="actions">
                    <b-button type="is-primary" :disabled="!questionFour.length" @click="handleQuestionFour">Submit</b-button>
                    <b-button @click="movePrev">Back</b-button>
                </div>
            </div>
        </div>
        <div class="page-5 page">
            <div class="container" v-animate="{value: 'fadeIn', delay: 0}">
                <h1 class="title">
                    Do you also need advising services on these fields? (Optional)
                </h1>
                <div>
                    <div class="field">
                        <b-checkbox v-model="questionFive"
                                    native-value="1" 
                                    size="is-medium">
                            Tax
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionFive"
                                    native-value="2" 
                                    size="is-medium">
                            Real estate
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionFive"
                                    native-value="3" 
                                    size="is-medium">
                            Insurance
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionFive"
                                    native-value="4" 
                                    size="is-medium">
                            Bank
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionFive"
                                    native-value="5" 
                                    size="is-medium">
                            Accounting
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionFive"
                                    native-value="6" 
                                    size="is-medium">
                            Law
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionFive"
                                    native-value="7" 
                                    size="is-medium">
                            Other
                        </b-checkbox>
                    </div>
                </div>
                <div class="actions">
                    <b-button type="is-primary" @click="handleQuestionFive">Submit</b-button>
                    <b-button @click="movePrev">Back</b-button>
                </div>
            </div>
        </div>
        <div class="page-6 page">
            <div class="container" v-animate="{value: 'fadeIn', delay: 0}">
                <h1 class="title">
                    Which kind of the following advisor do you prefer? (Optional)
                </h1>
                <div>
                    <div class="field">
                        <b-checkbox v-model="questionSix"
                                    native-value="1" 
                                    size="is-medium">
                            Independent investment advisor
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionSix"
                                    native-value="2" 
                                    size="is-medium">
                            Broker/Broker firm
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionSix"
                                    native-value="3" 
                                    size="is-medium">
                            Robo (Online) advisor
                        </b-checkbox>
                    </div>
                    <div class="field">
                        <b-checkbox v-model="questionSix"
                                    native-value="4" 
                                    size="is-medium">
                            Other
                        </b-checkbox>
                    </div>
                </div>
                <div class="actions">
                    <b-button type="is-primary" @click="handleQuestionSix">Submit</b-button>
                    <b-button @click="movePrev">Back</b-button>
                </div>
            </div>
        </div>
        <div class="page-7 page">
            <div class="container" v-animate="{value: 'fadeIn', delay: 0}">
                <h1 class="title">
                    You can narrow down by Zip Code (optional)
                </h1>
                <div>
                    <b-field>
                        <b-input placeholder="Zip Code" v-model="questionSeven" class="zip-input"></b-input>
                    </b-field>
                </div>
                <div class="actions">
                    <b-button type="is-primary" @click="handleQuestionSeven">Submit</b-button>
                    <b-button @click="movePrev">Back</b-button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Survey',
  data () {
    return {
        selectOptions: [ 
            {
                id: '1',
                name: 'Hello'
            },
            {
                id: '2',
                name: 'Goodbye'
            }
        ],
        buttonClick: false,
        opts: {
            start: 0,
            dir: 'v',
            duration: 500,
            beforeChange: function (currentSlideEl,currenIndex,nextIndex) {
                if(this.vm.$refs.example.querySelector('#isClick').getAttribute('data-on-click')) {
                    return true
                } else {
                    return false
                }
            },
            afterChange: function (currentSlideEl,currenIndex) {
            }
        },
        questionOne: null,
        questionTwo: null,
        questionThree: null,
        questionFour: [],
        questionFive: [],
        questionSix: [],
        questionSeven: '',
        dataObj: {}
    }
  },
  methods: {
        handleQuestionOne() {
            this.moveNext()
        },
        handleQuestionTwo() {
            this.moveNext()
        },
        handleQuestionThree() {
            this.moveNext()
        },
        handleQuestionFour() {
            this.moveNext()
        },
        handleQuestionFive() {
            this.moveNext()
        },
        handleQuestionSix() {
            this.moveNext()
        },
        handleQuestionSeven() {
            this.makeData()
            console.log(this.dataObj)
            this.$router.push({ path: 'data'})
        },
        makeData() {
            this.dataObj['q1'] = this.questionOne
            this.dataObj['q2'] = this.questionTwo
            this.dataObj['q3'] = this.questionThree
            this.dataObj['q4'] = this.questionFour
            this.dataObj['q5'] = this.questionFive
            this.dataObj['q6'] = this.questionSix
            this.dataObj['q7'] = this.questionSeven
            localStorage.setItem('dataObj', JSON.stringify(this.dataObj))
        },
        moveNext() {
            this.buttonClick = true
            this.$nextTick(() => {
                this.$refs.example.$fullpage.moveNext();
                this.buttonClick = false
            });
        },
        movePrev() {
            this.buttonClick = true
            this.$nextTick(() => {
                this.$refs.example.$fullpage.movePrev();
                this.buttonClick = false
            });
        },
        moveTo(index) {
            this.buttonClick = true
            this.$nextTick(() => {
                this.$refs.example.$fullpage.moveTo(index);
                this.buttonClick = false
            });
        }
  }
}
</script>

<style lang="scss">
h1.title {
    color: #000;
}
.fullpage-container {
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 100px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.page-1 {
    // background: blue;
}
.page-2 {
    // background: yellow;
}

.zip-input {
    width: 250px
}

.actions {
    margin-top: 25px;
}

#header {
    // /background: #FFFFFF;
    box-shadow: 0 9px 10px 0 rgba(0,0,0,0.10);
}
</style>