<template>
    <div class="data-page">
        <section class="result-heading">
            <h1>Result</h1>
        </section>
        <div class="container results-container">
            <div class="compare-container" v-if="compareIds.length > 1">
                    <b-button type="is-primary" @click="compare">
                        Show Comparison
                    </b-button>
            </div>
            <div class="columns is-multiline">
                <div class="column is-one-third listing" v-for="firm in finalNodes.slice(0, 20)">
                    <div class="listing-box">
                        <div class="listing-heading">
                            <h2>{{ firm.querySelector('Info').getAttribute('LegalNm') }}</h2>
                            <h3>CRD# {{ firm.querySelector('Info').getAttribute('FirmCrdNb') }}</h3>
                        </div>
                        <div class="listing-details">
                            <strong>{{ disclosureCount(firm) }}</strong> Disclosures<br>
                            <strong>10</strong> Years Experience<br>
                            Compensation <strong>{{ compensation(firm) }}</strong>
                        </div>
                        <div class="listing-actions">
                            <a href="#">View Detail</a>
                            <a @click="addToCompare(firm.querySelector('Info').getAttribute('FirmCrdNb'))">
                                {{ compareDisplay(firm.querySelector('Info').getAttribute('FirmCrdNb')) }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <b-loading :is-full-page="isFullPage" :active.sync="isLoading"></b-loading>
    </div>
</template>
<script>
const axios = require('axios')
export default {
  name: 'Data',
  data () {
    return {
        isLoading: true,
        finalNodes: [],
        compareIds: []
    }
  },
  mounted() {
        var dataObj = JSON.parse(localStorage.getItem('dataObj'))
        var querySelections = []


        console.log(dataObj)



        if (dataObj['q1'] == 1) {
            querySelections['Item5D'] = '[Q5D2A="0 percent"][Q5D2B="0 percent"]'
        } else if (dataObj['q1'] == 2) {
            querySelections['Item5D'] = '[Q5D2H="0 percent"][Q5D2H="0 percent"][Q5D2H="0 percent"]'
        }

        if (dataObj['q3'] == 1) {
            querySelections['Item2A'] = '[Q2A5="Y"][Q2A8="Y"][Q2A11="Y"]'
        } else if (dataObj['q3'] == 2 || dataObj['q3'] == 3) {
            querySelections['Item2A'] = '[Q2A2="Y"]'
        } else if (dataObj['q3'] == 4 || dataObj['q3'] == 5) {
            querySelections['Item2A'] = '[Q2A1="Y"][Q2A6="Y"][Q2A7="Y"]'
        }

        querySelections['Item5G'] = []
        if (dataObj['q4'].includes('1')) {
            querySelections['Item5G'].push('[Q5G1="Y"]')
        }
        if (dataObj['q4'].includes('2')) {
            querySelections['Item5G'].push('[Q5G2="Y"][Q5G3="Y"][Q5G4="Y"][Q5G5="Y"]')
        }
        if (dataObj['q4'].includes('4')) {
            querySelections['Item5G'].push('[Q5G6="Y"]')
        }
        if (dataObj['q4'].includes('5')) {
            querySelections['Item5G'].push('[Q5G7="Y"]')
        }
        if (dataObj['q4'].includes('6')) {
            querySelections['Item5G'].push('[Q5G9=Y]')
        }
        if (dataObj['q4'].includes('7')) {
            querySelections['Item5G'].push('[Q5G10=Y]')
        }
        if (dataObj['q4'].includes('8')) {
            querySelections['Item5G'].push('[Q5G11=Y]')
        }
        if (dataObj['q4'].includes('9')) {
            querySelections['Item5G'].push('[Q5G12=Y]')
        }

        

        
        querySelections['Item6A'] = []
        if (dataObj['q5'].includes('2')) {
            querySelections['Item6A'].push('[Q6A5=Y]')
        }
        if (dataObj['q5'].includes('3')) {
            querySelections['Item6A'].push('[Q6A6=Y]')
        }
        if (dataObj['q5'].includes('4')) {
            querySelections['Item6A'].push('[Q6A7=Y]')
        }
        if (dataObj['q5'].includes('5')) {
            querySelections['Item6A'].push('[Q6A12=Y]')
        }
        if (dataObj['q5'].includes('6')) {
            querySelections['Item6A'].push('[Q6A13=Y]')
        }
        if (dataObj['q5'].includes('7')) {
            querySelections['Item6A'].push('[Q6A14=Y]')
        }

        console.log(querySelections)
        axios.get('./static/data/IA_FIRM_SEC_Feed_04_11_2019.xml').then(response => {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(response.data,"text/xml");
            console.log('got the xml')

            var item5Dquery = 'Item5D'
            var nodes = xmlDoc.querySelectorAll(item5Dquery)

            // console.log(item5Dquery)

            var parents = [];
            for (var i = 0; i < nodes.length; i++) {
                parents.push(nodes[i].parentElement.parentElement.parentElement) 
            }
            // console.log(parents)


            var Item2Aquery = 'Item2A' + querySelections['Item2A']
            var parents2 = [];
            // console.log(Item2Aquery)
            for (var i = 0; i < parents.length; i++) {
                var select = parents[i].querySelector(Item2Aquery)
                if (select) {
                    parents2.push(parents[i])
                }
            }
            console.log(parents2)

            var Item5Gquery = 'Item5G' + querySelections['Item5G'].join("")
            var parents3 = [];
            console.log(Item5Gquery)
            for (var i = 0; i < parents2.length; i++) {
                var select = parents2[i].querySelector(Item5Gquery)
                // console.log(select)
                if (select) {
                    parents3.push(parents2[i])
                }
            }
            console.log(parents3)

            var Item6Aquery = 'Item6A' + querySelections['Item6A'].join("")
            console.log(Item6Aquery)
            var parents4 = [];
            for (var i = 0; i < parents3.length; i++) {
                var select = parents3[i].querySelector(Item6Aquery)
                // console.log(select)
                if (select) {
                    parents4.push(parents3[i])
                }
            }
            
            console.log(parents4)
            var zipQuery = 'MainAddr'
            console.log(zipQuery)

            for (var i = 0; i < parents4.length; i++) {
                var select = parents4[i].querySelector(zipQuery)
                if (select) {
                    this.finalNodes.push(parents4[i])
                }
            }

            this.isLoading = false;


        })
  },
  methods: {
      disclosureCount(firm) {
          var i = 0;

          var item = firm.querySelector('Item11')
          if (item.getAttribute('Q11') == 'Y') {
            i++
          }
          var item = firm.querySelector('Item11A')
          if (item.getAttribute('Q11A1') == 'Y') {
              i++
          }
          if (item.getAttribute('Q11A2') == 'Y') {
              i++
          }
          var item = firm.querySelector('Item11B')
          if (item.getAttribute('Q11B1') == 'Y') {
              i++
          }
          if (item.getAttribute('Q11B2') == 'Y') {
              i++
          }
          var item = firm.querySelector('Item11C')
          if (item.getAttribute('Q11C1') == 'Y') {
              i++
          }
          if (item.getAttribute('Q11C2') == 'Y') {
              i++
          }
          if (item.getAttribute('Q11C3') == 'Y') {
              i++
          }
          if (item.getAttribute('Q11C4') == 'Y') {
              i++
          }
          if (item.getAttribute('Q11C5') == 'Y') {
              i++
          }
          var item = firm.querySelector('Item11D')
          if (item.getAttribute('Q11D1') == 'Y') {
              i++
          }
          if (item.getAttribute('Q11D2') == 'Y') {
              i++
          }
          if (item.getAttribute('Q11D3') == 'Y') {
              i++
          }
          if (item.getAttribute('Q11D4') == 'Y') {
              i++
          }
          if (item.getAttribute('Q11D5') == 'Y') {
              i++
          }
          var item = firm.querySelector('Item11E')
          if (item.getAttribute('Q11E1') == 'Y') {
              i++
          }
          if (item.getAttribute('Q11E2') == 'Y') {
              i++
          }
          if (item.getAttribute('Q11E3') == 'Y') {
              i++
          }
          if (item.getAttribute('Q11E4') == 'Y') {
              i++
          }
          var item = firm.querySelector('Item11F')
          if (item.getAttribute('Q11F') == 'Y') {
            i++
          }
          var item = firm.querySelector('Item11G')
          if (item.getAttribute('Q11G') == 'Y') {
            i++
          }
          var item = firm.querySelector('Item11H')
          if (item.getAttribute('Q11H1A') == 'Y') {
            i++
          }
          if (item.getAttribute('Q11H1B') == 'Y') {
            i++
          }
          if (item.getAttribute('Q11H1C') == 'Y') {
            i++
          }
          if (item.getAttribute('Q11H2') == 'Y') {
            i++
          }
          return i;

      },
      compensation(firm) {
          var item = firm.querySelector('Item5E')
          var myArray = []
          if (item.getAttribute('Q5E1') == 'Y') {
              myArray.push('% of assets')
          }
          if (item.getAttribute('Q5E2') == 'Y') {
              myArray.push('Hourly charges')
          }
          if (item.getAttribute('Q5E4') == 'Y') {
              myArray.push('Subscription fees')
          }
          if (item.getAttribute('Q5E5') == 'Y') {
              myArray.push('Fixed fees')
          }
          if (item.getAttribute('Q5E6') == 'Y') {
              myArray.push('Commissions')
          }
          if (item.getAttribute('Q5E7') == 'Y') {
              myArray.push('Performance-based fees')
          }
          if (item.getAttribute('Q5E7Oth') !== '') {
              myArray.push(item.getAttribute('Q5E7Oth'))
          }

        return myArray.join(", ")
        

      },
      addToCompare(id) {
          if (this.compareIds.includes(id)) {
              var index = this.compareIds.indexOf(id)
              this.compareIds.splice(index, 1)
          }
          else if (this.compareIds.length < 2) {
              this.compareIds.push(id)
          }
      },
      compareDisplay(id) {
          if (this.compareIds.includes(id)) {
              return  '- Remove'
          } else {
              return  '+ Compare'
          }
      },
      compare() {
          localStorage.setItem('compare-1', this.compareIds[0])
          localStorage.setItem('compare-2', this.compareIds[1])
          this.$router.push({ path: 'compare'})
      }
  }
}
</script>
<style lang="scss">
.data-page {
    background-color: #fafafa;
}
section {
    h1 {
        font-size: 45px;
        text-align: center;
        font-weight: bold;
        text-transform : uppercase;
        letter-spacing: 1px;
    }
    &.result-heading {
        background: url('/static/result.png') center no-repeat;
        background-size: cover;
        padding: 100px 0;
        text-align: center;
        color: #fff;
    }
}
.results-container {
    padding-top: 50px;
}

.listing {
    
    .listing-box {
        background: #FFFFFF;
        box-shadow: 0 5px 9px 0 rgba(0,0,0,0.08);
        margin: 5px 10px 0;
    }
    .listing-heading {
        background-color: #465EAB;
        color: white;
        height: 100px;
        padding: 15px;
        h2  {
            font-weight: bold;
            font-size: 20px;
            line-height: 1.2;
        }
        h3 {
            font-size: 14px;
            font-weight: normal;
        }
    }
    .listing-details {
        padding: 15px 13px;
    }
    .listing-actions {
        border-top: 1px solid #E7E7E7;
        a {
            display:inline-block;
            text-align: center;
            width: 172px;
            padding: 10px;
            &:last-of-type  {
                border-left: 1px solid #E7E7E7;
            }
        }
    }
}

.compare-container {
    text-align: center;
    margin-bottom: 50px;
}
</style>
