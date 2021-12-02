import React, { useEffect, useState, useRef } from 'react';
import * as SignalWire from "@signalwire/js"
const audioRootElement = document.createElement('div')

/**
 * This function connects the client to the specified room.
 *
 * @param {string} room The name of the room
 * @param {string} room The name of the user
 * @param {function} onParticipantsUpdated Function that is called whenever the
 *                   list of participants changes. Receives the list of
 *                   participants.
 * @param {function} onParticipantTalking Function that is called whenever a
 *                   member starts or stops talking. Receives as first parameter
 *                   the id of the member, and as second parameter a boolean
 *                   indicating whether they are talking.
 * @param {function} onMutedUnmuted Function that is called whenever the current
 *                   member is muted or unmuted. Receives a boolean indicating
 *                   the current state.
 *
 * @returns a RoomSession object
 */
export default function Video({
                                        room,
                                        user,
                                        onParticipantsUpdated = () => { },
                                        onParticipantTalking = () => { },
                                        onMutedUnmuted = () => { },
                                    }) {

    let members = []
    useEffect(() => {
        const token = "eyJ0eXAiOiJWUlQiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MzQzMjEzMjcsImp0aSI6IjBmOTE0N2I4LTcyYTEtNDkwMS05NGQ3LTgxNDc0NjU4MTEzNCIsInN1YiI6ImExNmQ4ZjllLTIxNjYtNGU4Mi05NmFmLWE0ODQwZjIxN2JjMyIsInUiOiJkYW5pZWwiLCJyIjoiZW1iZWRkYWJsZSIsInMiOlsicm9vbS5zZWxmLmF1ZGlvX211dGUiLCJyb29tLnNlbGYuYXVkaW9fdW5tdXRlIiwicm9vbS5zZWxmLnZpZGVvX211dGUiLCJyb29tLnNlbGYudmlkZW9fdW5tdXRlIiwicm9vbS5zZWxmLmRlYWYiLCJyb29tLnNlbGYudW5kZWFmIiwicm9vbS5oaWRlX3ZpZGVvX211dGVkIiwicm9vbS5zaG93X3ZpZGVvX211dGVkIiwicm9vbS5zZXRfbGF5b3V0Il0sImFjciI6dHJ1ZX0.TbeoOBcNhMWx_TvS57-OWodJBCFmYcPR6-QH5nuxb2pjTkINsWvPfGEtmMtJeQAmkYablD8dh-Hb02usQ_y8Ng"

        const roomSession = new SignalWire.Video.RoomSession({
            token: token,
            audio: true,
            video: true,
            rootElement: document.getElementById("videoRoot")
        })
        roomSession.join()
    }, [])
    // Get a token from our own server

    return <div id="videoRoot" style={{width: "900px", height: "600px", display:"block"}}>
    </div>
}