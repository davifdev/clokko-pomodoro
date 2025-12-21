import type { TaskStateModel } from '../models/taskStateModel';

let instance: TimerWorkerManager | null = null;

export class TimerWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL('./timeWorker.js', import.meta.url));
  }

  public static getInstance(): TimerWorkerManager {
    if (!instance) {
      instance = new TimerWorkerManager();
    }
    return instance;
  }

  postMessage(message: TaskStateModel) {
    this.worker.postMessage(message);
  }

  onmessage(callback: (e: MessageEvent) => void) {
    this.worker.onmessage = callback;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}
