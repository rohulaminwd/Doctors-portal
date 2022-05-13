import React from 'react';

const BookingModal = ({treatment, date, setTreatment}) => {
    const {_id, name, slots} = treatment;

    const handleSubmit = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const date = e.target.date.value;

        const data = {slot, name, phone, email, date, _id}
        console.log(data)
        setTreatment(null)
    }

    return (
        <div>

            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 justify-items-center gap-3 mt-8'>
                        <input type="text" name='date' value={date} disabled class="input input-bordered w-full" />
                        <select name='slot' class="select bg-[#E6E6E6] select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" class="input input-bordered w-full" />
                        <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered w-full" />
                        <input type="email" name='email' placeholder="Email" class="input input-bordered w-full" />
                        <input type="submit" value="Submit" class="btn btn-black text-white w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;