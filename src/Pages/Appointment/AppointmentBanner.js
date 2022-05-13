import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    return (
        <div class="hero py-16 bg-cover" style={{background: `url(${bg})`}}>
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <DayPicker 
                 mode="single"
                 selected={date}
                 onSelect={setDate}
                />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;