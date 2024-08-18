import { useEffect, useState } from 'react';
import './app.scss';
import { Orchestrator } from '@shared/orchestrator';
import { useNavigate } from 'react-router-dom';
import { AssisteComigoMessage } from '@shared/types/message.type';

function Start() {
  const navigate = useNavigate();

  const orchestrator = Orchestrator.getInstance();

  function getStateHandler(
    response: AssisteComigoMessage<{ platform?: string; player?: boolean }>,
  ) {
    console.log('Response:', response);
    const type = response?.type;
    if (type === 'ready') {
      navigate('/create', {
        state: { platform: response.payload?.platform },
      });
    } else if (type == 'not-ready') {
      navigate('/error', {
        state: { reason: 'Abra um vídeo para começar uma sessão' },
      });
    } else if (type === 'session-active') {
      navigate('/in-session', {
        state: { platform: response.payload?.platform },
      });
    } else if (type == 'unsupported-platform') {
      navigate('/error', {
        state: { reason: 'Plataforma não suportada' },
      });
    } else {
      navigate('/error', {
        state: { reason: 'Erro desconhecido' },
      });
    }
  }

  function sendMessage() {
    try {
      orchestrator.sendMessage('get-state', {}, 'popup', getStateHandler);
    } catch (error) {
      navigate('/error', {
        state: { reason: 'Não foi possível se conectar com o service Worker' },
      });
    }
  }

  useEffect(() => {
    sendMessage();
  }, []);

  return (
    <div className="ac-home">
      <h1>Assiste Comigo</h1>
    </div>
  );
}

export default Start;
