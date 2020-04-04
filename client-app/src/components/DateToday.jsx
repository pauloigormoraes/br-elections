import React from 'react';

class DateToday extends React.Component {
    constructor(props) {
        super();
        var time = new Date()
        var month = new Array(12);
            month[0] = "Janeiro";
            month[1] = "Fevereiro";
            month[2] = "Março";
            month[3] = "Abril";
            month[4] = "Maio";
            month[5] = "Junho";
            month[6] = "Julho";
            month[7] = "Augosto";
            month[8] = "Setembro";
            month[9] = "Outubro";
            month[10] = "Novembro";
            month[11] = "Dezembro";
        this.state = {
            day: time.getDate(),
            month: month[time.getMonth()],
            year: time.getFullYear()
        }
    }
    render() {
        return(
            <>
                <h6>
                    <b>
                        <i>
                            {this.state.day}.{this.state.month}.{this.state.year}
                        </i>
                    </b>
                </h6>
            </>
        );
    }
}

export default DateToday;