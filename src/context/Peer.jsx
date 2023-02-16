import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const PeerContext = createContext(null);
export const usePeer = () => useContext(PeerContext);

export const PeerProvider = ({ children }) => {
  const [remoteStream, setRemoteStream] = useState(null);
  const peer = useMemo(
    () =>
      new RTCPeerConnection({
        iceServers: [
          {
            urls: [
              "stun:stun.l.google.com19302",
              "stun:global.stun.twilio.com:3478",
            ],
          },
        ],
      }),
    []
  );

  const createOffer = async () => {
    const offer = await peer?.createOffer();
    await peer?.setLocalDescription(offer);
    return offer;
  };

  const createAnswer = async (offer) => {
    await peer?.setRemoteDescription(offer);
    const answer = await peer?.createAnswer();
    await peer?.setLocalDescription(answer);
    return answer;
  };
  const setRemoteAns = async (ans) => {
    await peer?.setRemoteDescription(ans);
  };
  const sendStream = async (stream) => {
    const tracks = stream?.getTracks();
    for (const track of tracks) {
      peer?.addTrack(track, stream);
    }
  };

  const handleTrackEvent = useCallback((ev) => {
    const streams = ev.streams;
    setRemoteStream(streams[0]);
  }, []);

 

  useEffect(() => {
    peer?.addEventListener("track", handleTrackEvent);
  
    return () => {
      peer?.removeEventListener("track", handleTrackEvent);
     
    };
  }, [handleTrackEvent, peer]);
  return (
    <PeerContext.Provider
      value={{
        peer,
        createOffer,
        createAnswer,
        setRemoteAns,
        sendStream,
        remoteStream,
      }}
    >
      {children}
    </PeerContext.Provider>
  );
};

// import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

// interface PeerContextValue {
// peer: RTCPeerConnection | null;
// createOffer: () => Promise<RTCSessionDescriptionInit | undefined>;
// createAnswer: (offer: RTCSessionDescriptionInit) => Promise<RTCSessionDescriptionInit | undefined>;
// setRemoteAns: (ans: RTCSessionDescriptionInit) => Promise<void>;
// sendStream: (stream: MediaStream) => Promise<void>;
// remoteStream: MediaStream | null;
// }

// const PeerContext = createContext<PeerContextValue | null>(null);

// export const usePeer = () => useContext(PeerContext);

// interface PeerProviderProps {
// children: React.ReactNode;
// }

// export const PeerProvider: React.FC<PeerProviderProps> = ({ children }) => {
// const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
// const peer = useMemo(() => {
// return new RTCPeerConnection({
// iceServers: [
// {
// urls: [
// 'stun:stun.l.google.com19302',
// 'stun:global.stun.twilio.com:3478',
// ],
// },
// ],
// });
// }, []);

// const createOffer = useCallback(async () => {
// if (!peer) {
// return;
// }
// const offer = await peer.createOffer();
// if (!offer) {
// return;
// }
// await peer.setLocalDescription(offer);
// return offer;
// }, [peer]);

// const createAnswer = useCallback(async (offer: RTCSessionDescriptionInit) => {
// if (!peer) {
// return;
// }
// await peer.setRemoteDescription(offer);
// const answer = await peer.createAnswer();
// if (!answer) {
// return;
// }
// await peer.setLocalDescription(answer);
// return answer;
// }, [peer]);

// const setRemoteAns = useCallback(async (ans: RTCSessionDescriptionInit) => {
// if (!peer) {
// return;
// }
// await peer.setRemoteDescription(ans);
// }, [peer]);

// const sendStream = useCallback(async (stream: MediaStream) => {
// if (!peer) {
// return;
// }
// const tracks = stream.getTracks();
// for (const track of tracks) {
// peer.addTrack(track, stream);
// }
// }, [peer]);

// const handleTrackEvent = useCallback((ev: RTCTrackEvent) => {
// const streams = ev.streams;
// setRemoteStream(streams[0]);
// }, []);

// useEffect(() => {
// if (!peer) {
// return;
// }
// peer.addEventListener('track', handleTrackEvent)
// return () => {
//   if (!peer) {
//     return;
//   }
//   peer.removeEventListener('track', handleTrackEvent);
// }}, [handleTrackEvent, peer]);

// return (
//       <PeerContext.Provider
//         value={{
//           peer,
//           createOffer,
//           createAnswer,
//           setRemoteAns,
//           sendStream,
//           remoteStream,
//         }}
//       >
//         {children}
//       </PeerContext.Provider>
//     );
//   };