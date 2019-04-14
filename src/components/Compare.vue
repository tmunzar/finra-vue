<template>
    <div class="compare-page">
        <section class="compare-heading">
            <div class="container">
                <h1>Broker Comparison</h1>
            </div>
        </section>
        <section>
            <div class="container comparison-table">
                <div class="columns">
                    <div class="column is-2 blue vs">
                        <h2>V.S.</h2>
                    </div>
                    <div class="column is-5 first company">
                        <h1>{{ companyOne.querySelector('Info').getAttribute('LegalNm') }}</h1>
                        <h3>CRD# {{ companyOne.querySelector('Info').getAttribute('FirmCrdNb') }}</h3>
                    </div>
                    <div class="column is-5 second company">
                        <h1>{{ companyTwo.querySelector('Info').getAttribute('LegalNm') }}</h1>
                        <h3>CRD# {{ companyTwo.querySelector('Info').getAttribute('FirmCrdNb') }}</h3>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-2 blue">
                        <h2>Disclosure</h2>
                    </div>
                    <div class="column is-5 first">
                        <h2>{{ disclosureCount(companyOne) }}</h2>
                    </div>
                    <div class="column is-5 second">
                        <h2>{{ disclosureCount(companyTwo) }}</h2>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-2 blue">
                        <h2>SEC Regulation</h2>
                    </div>
                    <div class="column is-5 first">
                        <p>{{ secRegulations(companyOne) }}</p>
                    </div>
                    <div class="column is-5 second">
                        <p>{{ secRegulations(companyTwo) }}</p>
                    </div>
                </div>
                <div class="columns last">
                    <div class="column is-2 blue">
                        <h2>Services</h2>
                    </div>
                    <div class="column is-5 first">
                        <p>Investment Advisor</p>
                    </div>
                    <div class="column is-5 second">
                        <p>Investment Advisor</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
const axios = require('axios')
export default {
    name: 'Compare',
    data () {
        return {
            companyOne: null,
            companyTwo: null
        }
    },
    mounted() {
        var compareOne = localStorage.getItem('compare-1')
        var compareTwo = localStorage.getItem('compare-2')
        var _this = this;
        console.log(compareOne + ' ' + compareTwo)
        axios.get('./static/data/IA_FIRM_SEC_Feed_04_11_2019.xml').then(response => {
            var parser = new DOMParser();
            var xmlDoc = parser.parseFromString(response.data,"text/xml");

            _this.companyOne = xmlDoc.querySelector('Info[FirmCrdNb="'+compareOne+'"]').parentElement
            _this.companyTwo = xmlDoc.querySelector('Info[FirmCrdNb="'+compareTwo+'"]').parentElement
            console.log('got the xml')
        })
    },
    methods: {
        disclosureCount(firm) {
            if (firm != null) {
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
            }
        },
        secRegulations(firm) {
            if (firm != null) {

                var item = firm.querySelector('Item2A')
                var regulations = []
                if(item.getAttribute('Q2A1') == 'Y') {
                    regulations.push("Large advisory firm")
                }
                if(item.getAttribute('Q2A2') == 'Y') {
                    regulations.push("Mid-sized advisory firm");
                }
                if(item.getAttribute('Q2A3') == 'Y') {
                    regulations.push("Reserved");
                }
                if(item.getAttribute('Q2A4') == 'Y') {
                    regulations.push("Foreign firm");
                }
                if(item.getAttribute('Q2A5') == 'Y') {
                    regulations.push("Investment adviser to an investment company");
                }
                if(item.getAttribute('Q2A6') == 'Y') {
                    regulations.push("Business development company");
                }
                if(item.getAttribute('Q2A7') == 'Y') {
                    regulations.push("Pension consultant");
                }
                if(item.getAttribute('Q2A8') == 'Y') {
                    regulations.push("Related adviser");
                }
                if(item.getAttribute('Q2A9') == 'Y') {
                    regulations.push("Adviser expect");
                }
                if(item.getAttribute('Q2A10') == 'Y') {
                    regulations.push("Multi-state adviser");
                }
                if(item.getAttribute('Q2A11') == 'Y') {
                    regulations.push("Interne t adviser");
                }
                if(item.getAttribute('Q2A12') == 'Y') {
                    regulations.push("Received an SEC order");
                }
                if(item.getAttribute('Q2A13') == 'Y') {
                    regulations.push("No longer eligible");
                }

                return regulations.join(", ")
            }
        },

    }
}
</script>

<style lang="scss">
section.compare-heading {
    background-color: #465EAB;
    padding: 25px 0;
    color: #FFF;
    h1 {
        font-size: 45px;
        font-weight: bold;
        text-align: left;
        text-transform: none;
    }
}
.comparison-table {
    margin-top:  50px;
    text-align: center;
    h1,h2,h3 {
        font-weight: bold;
    }
}
.column.blue {
    background-color: #465EAB;
    color: #fff;
    border-bottom: 1px solid #ccc;
    &.vs {
        h2 {
            padding: 100px 0;
        }
    }
}
.column.is-5 {
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    h1 {
        font-size: 40px;
    }
    h2 {
        font-size: 30px;
    }
    h3 {
        font-weight: normal;
        font-size: 20px;
    }
    &.company {
        h1  {
            padding-top: 50px;
        }
    }
}
.columns.last {
    border-bottom: 1px solid #ccc;
}
</style>