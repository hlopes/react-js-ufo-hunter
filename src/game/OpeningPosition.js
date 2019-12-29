// Utils
import keyCodes from '../utils/keys';
import styles from '../utils/styles';

// Positions
import TransferPosition from './TransferPosition';

class OpeningPosition {
    draw(play) {
        const ctx = play.ctx;

        // UFO Hunter
        ctx.clearRect(0,0, play.width, play.height);
        ctx.font = `80px ${styles.font}`;
        ctx.textAlign = 'center';

        const gradient = ctx.createLinearGradient((play.width/2-180), (play.height/2), (play.width/2+180), (play.height/2));
        gradient.addColorStop(0, 'yellow');
        gradient.addColorStop(0.5, 'red');
        gradient.addColorStop(1.0, 'yellow');
        ctx.fillStyle = gradient;
        ctx.fillText('UFO HUNTER', play.width/2, play.height/2-70);

        // Press 'Space' tp start
        ctx.font = `40px ${styles.font}`;
        ctx.fillStyle = styles.textColor;
        ctx.fillText('Press \'Space\' to start', play.width/2, play.height/2);

        // Game controls
        ctx.fillStyle = '#2e2f00';
        ctx.fillText('Game Controls', play.width/2, play.height/2+130);
        ctx.fillText('P: Pause', play.width/2, play.height/2+180);
        ctx.fillText('S: Mute', play.width/2, play.height/2+220);
        ctx.fillText('⬅: Move Left', play.width/2, play.height/2+260);
        ctx.fillText('➡: Move Right', play.width/2, play.height/2+300);
        ctx.fillText('Space: Fire', play.width/2, play.height/2+340);
    }

    keyDown(play, keyboardCode) {
        if (keyboardCode === keyCodes.SPACE) {
            // reinitialize
            play.level = 1;
            play.score = 0;
            play.shields = 2;
            play.goToPosition(new TransferPosition(play.level));
        }
    }
}

export default OpeningPosition;
