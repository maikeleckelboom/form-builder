import {createMachine} from 'xstate';


const fileMachine = createMachine({
    id: 'file',
    initial: 'dragging',
    states: {
        dragging: {
            type: 'parallel',
            states: {
                capturing: {
                    initial: 'idle',
                    states: {
                        idle: {
                            on: {
                                INIT_UPLOAD: {target: 'pending'}
                            }
                        },
                        pending: {
                            on: {
                                UPLOAD_COMPLETE: {target: 'success'}
                            }
                        },
                        success: {}
                    }
                },
                broadcasting: {
                    initial: 'idle',
                    states: {
                        idle: {
                            on: {
                                INIT_DOWNLOAD: {target: 'pending'}
                            }
                        },
                        pending: {
                            on: {
                                DOWNLOAD_COMPLETE: {target: 'success'}
                            }
                        },
                        success: {}
                    }
                }
            }
        },
    }
});