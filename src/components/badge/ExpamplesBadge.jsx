import React from 'react';
import Badge from './Badge';
import Button from '../button/Button';
import Icon from '../icon/Icon';

const ExpamplesBadge = () => (
  <>
    <h2><span>1. Бейджики з текстом:</span></h2>
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', columnGap: 20 }}>
      <Button>
        <Icon name="envelope" />
        <Badge value="new" />
      </Button>
      <Button>
        <Icon name="envelope" />
        <Badge circle value="new" />
      </Button>
    </div>

    <h2><span>2. Бейджики з числами:</span></h2>
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', columnGap: 20 }}>
      <Button >
        <Icon name="comment" />
        <Badge value={2} />
      </Button>
      <Button>
        <Icon name="comment-dots" />
        <Badge circle value={12} />
      </Button>
    </div>

    <h2><span>3. Вбудовані бейджики:</span></h2>
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', columnGap: 20 }}>
      <Button>
        <Icon name="phone" />
        <Badge inline value={1} />
      </Button>
      <Button>
        <Icon name="phone" />
        <Badge inline value="1 пропущений" />
      </Button>
    </div>

    <h2><span>4. Зовнішні бейджики:</span></h2>
    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', columnGap: 20 }}>
      <Button>
        <Icon name="bell" />
        <Badge outer value={1} />
      </Button>
      <Button>
        <Icon name="wifi" />
        <Badge outer warning value={1} />
      </Button>
    </div>

    <h2><span>5. Бейджики warning, alert, success та info:</span></h2>
    <div style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
      <Button>
        <Icon name="bullhorn" />
        <Badge circle warning value={1} />
      </Button>
      <Button>
        <Icon name="inbox" />
        <Badge circle alert value={1} />
      </Button>
      <Button>
        <Icon name="paper-plane" />
        <Badge circle success value={1} />
      </Button>
      <Button>
        <Icon name="rss" />
        <Badge circle info value={1} />
      </Button>
      <Button>
        <Icon name="bullhorn" />
        <Badge warning value={1} />
      </Button>
      <Button>
        <Icon name="inbox" />
        <Badge alert value={1} />
      </Button>
      <Button>
        <Icon name="paper-plane" />
        <Badge success value={1} />
      </Button>
      <Button>
        <Icon name="rss" />
        <Badge info value={1} />
      </Button>
    </div>
  </>
);

export default ExpamplesBadge;