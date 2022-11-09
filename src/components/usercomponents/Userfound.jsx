import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import UserContext from '../../context/user/userContext';
import avatar from '../../images/avatar.jpg'
import Follow from './Followcomponents/Follow';
import Unfollow from './Followcomponents/Unfollow';
const Userfound = () => {
    const context = useContext(UserContext);
    const { user } = context;
    const [follows, setFollows] = useState(true);
    return (
        <div>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-12 col-xl-4">
                        <div className="card" style={{ borderRadius: "15px" }}>
                            <div className="card-body text-center">
                                <div className="mt-3 mb-4">
                                    <img src={avatar}
                                        className="rounded-circle img-fluid" style={{ width: "100px" }} />
                                </div>
                                <h4 className="mb-2">{user.username}</h4>
                                <p className="text-muted mb-4">@Puzzler <span className="mx-2">|</span> <a
                                    href="#!">{user.email}</a></p>
                                {follows ? <Unfollow /> : <Follow />}
                                <div className="row mt-3">
                                    <p className="col mb-2 h5 text-info">Questions Solved</p>
                                    <p className="col text-muted mb-0">{user.practiceset.length}</p>
                                </div>
                                <div className="row mt-3">
                                    <p className="col mb-2 h5 text-info">Followers</p>
                                    <p className="col text-muted mb-0 text-info">{user.followers}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Userfound
