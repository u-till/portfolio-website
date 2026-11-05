let supported: boolean | undefined;

export function supportsWebGL() {
  if (supported === undefined) {
    const canvas = document.createElement('canvas');
    supported = Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  }
  return supported;
}
