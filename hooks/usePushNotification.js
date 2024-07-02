const usePushNotification = () => {
  const requestUserPermission = async () => {};

  const getFCMToken = async () => {};

  const listenToForegroundNotifications = async () => {};

  const listenToBackgroundNotifications = async () => {};

  const onNotificationOpenedAppFromBackground = async () => {};

  const onNotificationOpenedAppFromQuit = async () => {};

  return {
    requestUserPermission,
    getFCMToken,
    listenToForegroundNotifications,
    listenToBackgroundNotifications,
    onNotificationOpenedAppFromBackground,
    onNotificationOpenedAppFromQuit,
  };
};

export default usePushNotification;
