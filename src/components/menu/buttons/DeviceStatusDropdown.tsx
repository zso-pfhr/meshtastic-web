import React from 'react';

import { Types } from '@meshtastic/meshtasticjs';

import { useAppSelector } from '../../../hooks/redux';
import { Button } from '../../generic/Button';

export const DeviceStatusDropdown = (): JSX.Element => {
  const ready = useAppSelector((state) => state.meshtastic.ready);
  const deviceStatus = useAppSelector((state) => state.meshtastic.deviceStatus);

  return (
    <Button>
      <div
        className={`flex w-6 h-6 rounded-full animate-pulse shadow-md ${
          deviceStatus <= Types.DeviceStatusEnum.DEVICE_DISCONNECTED
            ? 'bg-red-400 animate-pulse'
            : deviceStatus <= Types.DeviceStatusEnum.DEVICE_CONFIGURING &&
              !ready
            ? 'bg-yellow-400 animate-pulse'
            : ready
            ? 'bg-green-400'
            : 'bg-gray-400'
        }`}
      ></div>
    </Button>
  );
};